// import Turma from "../model/Turma";
// // import Aluno from "../model/Aluno";

// interface TableList {
//     tbody: HTMLTableSectionElement, 
//     clear(): void,
//     render(turma: Turma): void
// }

// class ListTemplateTBody implements TableList {
//     tbody: HTMLTableSectionElement;

//     constructor() {
//         this.tbody = document.querySelector("tbody") as HTMLTableSectionElement;
//     }

//     clear(): void {
//         this.tbody.innerHTML = "";
//     }

//     render(turma: Turma): void {
//         this.clear();

//         turma.getList().forEach((aluno) => {
//             this.tbody.appendChild(this.createLineinTableElement(aluno));
//         });
//     }

//     createLineinTableElement(itemAluno: Aluno) {
//         const trElement: HTMLTableRowElement = document.createElement("tr");
      
//         const tdElementId: HTMLTableCellElement = document.createElement("td");
//         const tdElementNome: HTMLTableCellElement = document.createElement("td");
//         const tdElementIdade:  HTMLTableCellElement = document.createElement("td");
//         const tdElementAltura: HTMLTableCellElement = document.createElement("td");
//         const tdElementPeso: HTMLTableCellElement = document.createElement("td");

//         tdElementId.textContent = itemAluno.getId();
//         tdElementNome.textContent = itemAluno.getNome();
//         tdElementIdade.textContent = itemAluno.getIdade().toString();
//         tdElementAltura.textContent = itemAluno.getAltura().toString();
//         tdElementPeso.textContent = itemAluno.getPeso().toString();

//         trElement.appendChild(tdElementId);
//         trElement.appendChild(tdElementNome);
//         trElement.appendChild(tdElementIdade);
//         trElement.appendChild(tdElementAltura);
//         trElement.appendChild(tdElementPeso);

//         const tdElementActions: HTMLElement = document.createElement("td");
      
//         const btnEditElement: HTMLButtonElement = document.createElement("button");
//         const btnDeleteElement: HTMLButtonElement = document.createElement("button");
      
//         let idElement: string = itemAluno.getId();
      
//         btnEditElement.setAttribute("id", idElement);
//         btnDeleteElement.setAttribute("id", idElement);
      
//         btnEditElement.setAttribute("data-bs-toggle", "modal");
//         btnEditElement.setAttribute("data-bs-target", "#editTaskModal");
//         btnEditElement.setAttribute("type", "button");
      
//         btnEditElement.textContent = "Editar";
//         btnEditElement.classList.add("btn");
//         btnEditElement.classList.add("btn-secondary");
//         btnEditElement.classList.add("mx-1");
      
//         // btnEditElement.addEventListener("click"
      
//         btnDeleteElement.textContent = "Excluir";
//         btnDeleteElement.classList.add("btn");
//         btnDeleteElement.classList.add("btn-outline-secondary");
//         btnDeleteElement.classList.add("mx-1");
      
//         // btnDeleteElement.addEventListener("click", () => {});
      
//         tdElementActions.appendChild(btnEditElement);
//         tdElementActions.appendChild(btnDeleteElement);
      
//         trElement.appendChild(tdElementActions);
      
//         return trElement;
//     }
// }