CREATE DATABASE pontadelinha;

\c pontadelinha;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome_completo VARCHAR(100) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  nivel_acesso VARCHAR(20) NOT NULL,
  login VARCHAR(50) NOT NULL,
  senha VARCHAR(50) NOT NULL
);

CREATE TABLE endereco (
  id SERIAL PRIMARY KEY,
  pais VARCHAR(50),
  estado VARCHAR(50),
  cidade VARCHAR(50),
  rua VARCHAR(100),
  numero VARCHAR(10),
  cep VARCHAR(10)
);

CREATE TABLE ficha (
  id SERIAL PRIMARY KEY,
  nome_completo VARCHAR(100),
  cpf VARCHAR(11),
  endereco_id INTEGER REFERENCES endereco(id)
);

INSERT INTO usuarios (nome_completo, cpf, nivel_acesso, login, senha)
VALUES
  ('Usuário 1', '11111111111', 'Nível 1', 'usuario1', 'senha1'),
  ('Usuário 2', '22222222222', 'Nível 2', 'usuario2', 'senha2'),
  ('Usuário 3', '33333333333', 'Nível 3', 'usuario3', 'senha3'),
  ('Usuário 4', '44444444444', 'Nível 1', 'usuario4', 'senha4'),
  ('Usuário 5', '55555555555', 'Nível 2', 'usuario5', 'senha5');

INSERT INTO endereco (pais, estado, cidade, rua, numero, cep)
VALUES
  ('Brasil', 'São Paulo', 'São Paulo', 'Rua A', '123', '12345-678'),
  ('Brasil', 'Rio de Janeiro', 'Rio de Janeiro', 'Rua B', '456', '98765-432'),
  ('Brasil', 'Minas Gerais', 'Belo Horizonte', 'Rua C', '789', '54321-876'),
  ('Brasil', 'Bahia', 'Salvador', 'Rua D', '987', '87654-321'),
  ('Brasil', 'Santa Catarina', 'Florianópolis', 'Rua E', '654', '23456-789');

INSERT INTO ficha (nome_completo, cpf, endereco_id)
VALUES
  ('Ficha 1', '11111111111', 1),
  ('Ficha 2', '22222222222', 2),
  ('Ficha 3', '33333333333', 3),
  ('Ficha 4', '44444444444', 4),
  ('Ficha 5', '55555555555', 5);
