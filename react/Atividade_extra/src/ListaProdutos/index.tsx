import { useState, useRef, useEffect } from "react";
import axios from "axios";
import CustomTable, { TableColumn } from "../Tabela";
import ConfirmationModal from "../Confirmacao";

export interface IProduto {
  id: number;
  title: string;
  price: number;
  category: number;
}

export default function ListaProdutos() {
   const productToView = useRef<IProduto>();

  const [isModalConfirmationOpen, SetIsModalConfirmationOpen] = useState<boolean>(false);

  const [products, SetProducts] = useState<IProduto[]>([]);

  function RemoverItemTabela(produtoToDelete: IProduto) {
    SetProducts(
      products.filter((produto) => produto.id !== produtoToDelete.id)
    );
  }

  const columnsProducts: TableColumn<IProduto>[] = [
    {head: "ID", acessor: "id"},
    { head: "Título", acessor: "title" },
    { head: "Preco", acessor: "price" },
    { head: "Categoria", acessor: "category" },
    { head: "Visualizar", isActionButton: true, onActionClick: (obj) => {
      productToView.current = obj; 
      SetIsModalConfirmationOpen(true);
    }},
  ];

  
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      SetProducts(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      
      <CustomTable data={products} columns={columnsProducts} />

      <ConfirmationModal 
        isShow = {isModalConfirmationOpen}
        title = {productToView.current?.title as string}
        message = {productToView.current?.price as number}
        onCancel={() => {
          SetIsModalConfirmationOpen(false);
        }}
        onConfirm={() => {
          RemoverItemTabela(productToView.current!);
          SetIsModalConfirmationOpen(false);
        }}
      /> 
    </div>
  );
}

