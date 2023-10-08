const tvHTML: Tv = new Tv("TV 4K", "LG", 4000, "4k", 51);
const celularHTML: Celular = new Celular(
  "Celular Moto G10",
  "Motorola",
  2500,
  8
);
const bicicletaHTML: Bicicleta = new Bicicleta(
  "Bicicleta Velox MY23",
  "Caloi",
  1000,
  29
);

const carrinho: List<Produto> = new List<Produto>();

function totalCarrinho(lista: Produto[]) {
  return lista.reduce((accumulator, produto) => accumulator + produto.valor, 0);
}

const btnAddCarTv: HTMLButtonElement = document.querySelector(
  "#btnTV"
) as HTMLButtonElement;
const btnAddCarCel: HTMLButtonElement = document.querySelector(
  "#btnCel"
) as HTMLButtonElement;
const btnAddCarBike: HTMLButtonElement = document.querySelector(
  "#btnBike"
) as HTMLButtonElement;

const ulCards: HTMLUListElement = document.querySelector(
  "ul"
) as HTMLUListElement;

const totalCar: HTMLHeadElement = document.querySelector(
  "#total"
) as HTMLHeadingElement;

const btnsDel: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
  "li button"
) as NodeListOf<HTMLButtonElement>;

btnAddCarTv.addEventListener("click", () => {
  carrinho.addItem(tvHTML);
  ulCards.innerHTML += createElementIntoCar(tvHTML);
  totalCar.innerHTML = `<h3 id = "total"  class="card-title pricing-card-title mb-3">Total R$ ${totalCarrinho(
    carrinho.data
  )}</h3>`;
});

btnAddCarCel.addEventListener("click", () => {
  carrinho.addItem(celularHTML);
  ulCards.innerHTML += createElementIntoCar(celularHTML);
  totalCar.innerHTML = `<h3 id = "total"  class="card-title pricing-card-title mb-3">Total R$ ${totalCarrinho(
    carrinho.data
  )}</h3>`;
});

btnAddCarBike.addEventListener("click", () => {
  carrinho.addItem(bicicletaHTML);
  ulCards.innerHTML += createElementIntoCar(bicicletaHTML);
  totalCar.innerHTML = `<h3 id = "total"  class="card-title pricing-card-title mb-3">Total R$ ${totalCarrinho(
    carrinho.data
  )}</h3>`;
});

function createElementIntoCar(produto: Produto) {
  return `<li class="list-group-item d-flex justify-content-between">
    <div class="mt-2">
      ${produto.modelo}, R$ ${produto.valor}
    </div>
      <button class="btn delBtn" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
      </svg>
    </button>
  </li>`;
}
