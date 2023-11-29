import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ConfirmationModal from "../Modals/Confirmacao/index";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Modal Confirmation", () => {
  const onClickConfirmModalMock = jest.fn();
  const onClickCancelModalMock = jest.fn();

  it("should render the modal confirmation correctly when the attribute isShow is true", () => {
    render(
      <ConfirmationModal 
        isShow = {true} 
        title = "Alerta" 
        message= "Deseja excluir esse produto?" 
        onConfirm={onClickConfirmModalMock}
        onCancel = {onClickCancelModalMock}
      />
    );

    const title = screen.getByText("Alerta");
    const message = screen.getByText("Deseja excluir esse produto?");

    const cancelButton = screen.getByRole("button", {name: "Cancelar"});
    const confirmarButton = screen.getByRole("button", {name: "Confirmar"});

    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(confirmarButton).toBeInTheDocument();
  });

  it("should not to be render when the attribute isShow is false", () => {
    render(
      <ConfirmationModal 
        isShow = {false} 
        title = "Alerta" 
        message= "Deseja excluir esse produto?" 
        onConfirm={onClickConfirmModalMock}
        onCancel = {onClickCancelModalMock}
      />
    );

    const title = screen.queryByText("Alert");
    const message = screen.queryByText("Deseja excluir esse produto?");

    const cancelButton = screen.queryByRole("button", {name: "Cancelar"});
    const confirmarButton = screen.queryByRole("button", {name: "Confirmar"});

    expect(title).toBeNull();
    expect(message).toBeNull();
    expect(cancelButton).toBeNull();
    expect(confirmarButton).toBeNull();
  });
  
  it("should call onCancelClicked() when button \"Cancelar\" is clicked when the attribute isShow is true", async () => {
    render(
      <ConfirmationModal 
        isShow = {true} 
        title = "Alerta" 
        message= "Deseja excluir esse produto?" 
        onConfirm={onClickConfirmModalMock}
        onCancel = {onClickCancelModalMock}
      />
    );

    const cancelarButton = screen.getByRole("button", { name: "Cancelar"});

    expect(cancelarButton).toBeInTheDocument();

    userEvent.click(cancelarButton);

    await waitFor(() => {
      expect(onClickCancelModalMock).toHaveBeenCalledTimes(1);
    });
  });

  it("should call onConfirmClicked() when button \"Confirmar\" is clicked when the attribute isShow is true", async () => {
    render(
      <ConfirmationModal 
        isShow = {true} 
        title = "Alerta" 
        message= "Deseja excluir esse produto?" 
        onConfirm={onClickConfirmModalMock}
        onCancel = {onClickCancelModalMock}
      />
    );

    const confirmarButton = screen.getByRole("button", { name: "Confirmar"});

    expect(confirmarButton).toBeInTheDocument();

    userEvent.click(confirmarButton);

    await waitFor(() => {
      expect(onClickConfirmModalMock).toHaveBeenCalledTimes(1);
    });
  });
});
