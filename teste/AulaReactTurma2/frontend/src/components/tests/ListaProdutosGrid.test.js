import { render, screen, act, waitFor } from "@testing-library/react";
import React from "react";
import ProductListGrid from "../ListaProdutosGrid/index";
import userEvent from "@testing-library/user-event";

describe("ListaProdutosGrid", () => {
  const onClickProdutoMock = jest.fn();
  
  it("should render the list products correctly", () => {
    const listProducts = [
      {id: 1, nome: "laptop", preco: 3500, estoque: 12},
      {id: 2, nome: "celular", preco: 2000, estoque: 0}
    ];
   
    render(<ProductListGrid data = {listProducts} onProductClicked = {onClickProdutoMock} />);
    
    const divContainer = screen.getAllByRole("generic")[1];
    const productImages = screen.getAllByRole("img");

    //verify the quantity of products are displayed
    expect(divContainer.classList).toContain("container");
    expect(divContainer.childNodes).toHaveLength(2);

    //verify the quantity of image of products are displayed
    expect(productImages).toHaveLength(2);
    expect(productImages[0]).toHaveAccessibleName("Produto");
    expect(productImages[1]).toHaveAccessibleName("Produto");
  });

  it("should render product card correctly", () => {
    const listProducts = [
      {id: 1, nome: "laptop", preco: 3500, estoque: 12},
    ];

    render(<ProductListGrid data = {listProducts} onProductClicked = {onClickProdutoMock} />);

    const productImage = screen.getByRole("img");
    const productTitle = screen.getByText(listProducts[0].nome);
    const productPrice = screen.getByText(`R$ ${listProducts[0].preco}`);
    const buttonAddProductCart = screen.getByLabelText("Adicionar ao carrinho");
    const contentButton = screen.getByText("Carrinho");

    expect(productImage).toHaveAccessibleName("Produto");
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(buttonAddProductCart).toBeInTheDocument();
    expect(buttonAddProductCart).not.toBeDisabled();
    expect(contentButton).toBeInTheDocument();
  });

  it("should render product card with button disabled correctly when the product is not avaliable in the stock", () => {
    const listProducts = [
      {id: 1, nome: "laptop", preco: 3500, estoque: 0},
    ];

    render(<ProductListGrid data = {listProducts} onProductClicked = {onClickProdutoMock} />);

    const productImage = screen.getByRole("img");
    const productTitle = screen.getByText(listProducts[0].nome);
    const productPrice = screen.getByText(`R$ ${listProducts[0].preco}`);
    const buttonAddProductCart = screen.getByLabelText("Produto indisponível");
    const contentButton = screen.getByRole("button", {nome: "Indisponível"});

    expect(productImage).toHaveAccessibleName("Produto");
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(buttonAddProductCart).toBeInTheDocument();
    expect(buttonAddProductCart).toBeDisabled();
    expect(contentButton).toBeInTheDocument();
  });

  it("should call onProductClicked() when button \"Adicionar ao carrinho\" is clicked", async () => {
     const listProducts = [
      {id: 1, nome: "laptop", preco: 3500, estoque: 12},
    ];

    render(<ProductListGrid data = {listProducts} onProductClicked = {onClickProdutoMock} />);

    const adicionarCarrinhoButton = screen.getByLabelText("Adicionar ao carrinho");

    expect(adicionarCarrinhoButton).toBeInTheDocument();

    await act(async () => {
      userEvent.click(adicionarCarrinhoButton);
      await waitFor(() => {
        expect(onClickProdutoMock).toHaveBeenCalledTimes(1);
      })
    })
  });
});

