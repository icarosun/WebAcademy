import { useState, useEffect } from "react";
import { IProduto } from "../ListaProdutos"; 

interface AttAddProdutoProps {
  ishow: boolean,
  onClose: () => void,
  productUpdate: IProduto | undefined;
  onAddProduct?: (prod: IProduto) => void;
  onAttProduct?: (prod: IProduto) => void;
}

export default function AttAddProduto(props: AttAddProdutoProps) {
  const [nameProduct, SetNameProduct] = useState<string>("");
  const [precoProduct, SetPrecoProduct] = useState<number>(0);
  const [estoqueProduct, SetEstoqueProduct] = useState<number>(0);
 
  useEffect(() => {
    if(props.productUpdate !== undefined) {
      SetNameProduct(props.productUpdate.nome);
      SetPrecoProduct(props.productUpdate.preco);
      SetEstoqueProduct(props.productUpdate.estoque);
    }
  }, []);

  function changeProduct() {
    const inpProduct: IProduto = {
      id: 0,
      estoque: estoqueProduct,
      nome: nameProduct,
      preco: precoProduct
    };

    if (props.productUpdate) {
    }
  }

  return(
    <Modal show = {props.isShow} onHide={props.onCancel}>
      <Modal.Header closeButton={true}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button onClick = {props.onCancel}>Cancelar</Button>
        <Button onClick = {props.onConfirm}>Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
} 
