-- use loja_lab01;

CREATE TABLE Cliente
(cpf CHAR(11) NOT NULL,
nome VARCHAR(100) NOT NULL,
celular VARCHAR(13) NOT NULL,
email VARCHAR(50) NOT NULL, 
data_nascimento DATE NOT NULL,
senha CHAR(80) NOT NULL,
PRIMARY KEY (cpf),
UNIQUE(email));

CREATE TABLE Endereco
(cep CHAR(9) NOT NULL,
PRIMARY KEY(cep));

CREATE TABLE clienteEndereco 
(cpf CHAR(11) NOT NULL,
cep CHAR(9) NOT NULL,
numero INT NOT NULL,
complemento TEXT, 
PRIMARY KEY (cep, cpf), 
FOREIGN KEY (cep) REFERENCES Endereco(cep),
FOREIGN KEY (cpf) REFERENCES Cliente(cpf)
);

CREATE TABLE Pagamento
(codPagamento VARCHAR(36) NOT NULL,
tipo VARCHAR(10) NOT NULL,
PRIMARY KEY (codPagamento));

CREATE TABLE Compra 
(codCompra VARCHAR(36) NOT NULL,
data_compra DATETIME NOT NULL,
desconto DECIMAL(5, 2) NOT NULL,
cpf CHAR(11) NOT NULL, 
cep CHAR(9) NOT NULL,
codPagamento VARCHAR(36) NOT NULL,
PRIMARY KEY (codCompra),
FOREIGN KEY (cpf) REFERENCES clienteEndereco(cpf),
FOREIGN KEY (cep) REFERENCES clienteEndereco(cep),
FOREIGN KEY (codPagamento) REFERENCES Pagamento(codPagamento)
);

CREATE TABLE Categoria 
(codCategoria VARCHAR(36) NOT NULL,
nome VARCHAR(20) NOT NULL,
PRIMARY KEY (codCategoria));

CREATE TABLE Subcategoria 
(codSubcategoria VARCHAR(36) NOT NULL, 
nome VARCHAR(20) NOT NULL,
codCategoria VARCHAR(36), 
PRIMARY KEY (codSubcategoria),
FOREIGN KEY (codCategoria) REFERENCES Categoria(codCategoria) 
ON UPDATE CASCADE
);

CREATE TABLE Produto
(codProduto VARCHAR(36) NOT NULL,
quantidade INT NOT NULL, 
preco_base DECIMAL(12, 2) NOT NULL,
fabricante VARCHAR(50) NOT NULL, 
modelo VARCHAR(100) NOT NULL, 
numero_serie VARCHAR(100), 
codSubcategoria VARCHAR(36), 
PRIMARY KEY (codProduto),
FOREIGN KEY (codSubcategoria) REFERENCES Subcategoria(codSubcategoria)
ON UPDATE CASCADE
);

CREATE TABLE compraProduto 
(codCompra VARCHAR(36) NOT NULL,
codProduto VARCHAR(36) NOT NULL,
PRIMARY KEY (codCompra, codProduto),
FOREIGN KEY (codCompra) REFERENCES Compra(codCompra),
FOREIGN KEY (codProduto) REFERENCES Produto(codProduto)
);