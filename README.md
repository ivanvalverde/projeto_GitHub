# Infohub
Projeto que puxa informações sobre qualquer usuário do GitHub e traz também seus repositórios

## Organização do projeto

O projeto é composto por arquivos principais e seus componentes que estão divididos em pastas, sendo elas: **Imgs**, **srcs** e **css**.

- ***index.html*** - É a página principal onde todas as operações são realizadas;
- ***index.js*** - É o script que associa o evento de busca do usuário ao botão, é um script auxiliar.

### Imgs

Dentro desta pasta estão todas as imagens utilizadas durante o projeto.
Conteúdo presente:

- ***background.png*** - Fundo texturizado da página ***index.html***;
- ***hub.png*** - FavIcon utilizado no título do navegador;
- ***repositories.png*** - Ícone dos repositórios;
- ***repositoriesHover.png*** - Ícone(Hover) dos repositórios.

### css

Dentro desta pasta estão todas as folhas de estilo associadas ao projeto.
Conteúdo presente:

- ***index-style.css*** - Estilos customizados da página ***index.html***;
- ***reset.css*** - Resetando formatação já aplicada pelo navegador.


### srcs

Esta é a pasta referente à todos os códigos associados ao projeto. Ela foi dividida em 3 subpastas: **Controller**, **Models** e **View**.

#### Controller

Pasta contendo os scripts que fazem a ligação entre os modelos e a visuzalição da página. Aqui estão todos os códigos necessários para às requisições da API do GitHub.
Conteúdo presente:

- ***ReposController.js*** - Código com a requisição dos repositórios do usuário solicitado;
- ***UserController.js*** - Código com a requisição dos dados do usuário solicitado.

#### Models

Pasta contendo os scripts que modelam os dados coletados do usuário.
Conteúdo presente:

- ***Repos.js*** - Código com os dados dos repositórios solicitados;
- ***User.js*** - Código com os dados do usuário solicitado.

#### View

Pasta contendo os scripts que dispõem todas as informações obtidas dos modelos para a visualização no navegador.
Conteúdo presente:

- ***ReposView.js*** - Código com os elementos disponibilizados para a visuzalição dos repositórios solicitados;
- ***UserView.js*** - Código com os elementos disponibilizados para a visuzalição do usuário solicitado;




________________________________________________________________________________________________________________________________________



# Infohub
Project that pulls information about any GitHub user and also brings their repositories

## Project organization

The project consists of main files and their components that are divided into folders, which are: **Imgs**, **srcs** and **css**.

- *** index.html *** - It is the main page where all operations are performed;
- *** index.js *** - It is the script that associates the user's search event with the button, it is an auxiliary script.

### Imgs

Within this folder are all the images used during the project.
Present content:

- ***background.png*** - Textured page background ***index.html***;
- ***hub.png*** - FavIcon used in the browser title;
- ***repositories.png*** - Repositories' icon;
- ***repositoriesHover.png*** - Repositories' icon(hover).

### css

Within this folder are all the style sheets associated with the project.
Present content:

- ***index-style.css*** - Custom page styles ***index.html***;
- ***reset.css*** - Reset formatting already applied by the browser.


### srcs

This is the folder for all codes associated with the project. It was divided into 3 subfolders: **Controller**, **Models** and **View**.

#### Controller

Folder containing the scripts that make the connection between the models and the visualization of the page. Here are all the codes needed for GitHub API requests.
Present content:

- ***ReposController.js*** - Code with the request for the requested user's repositories;
- ***UserController.js*** - Code with the requested user data.

#### Models

Folder containing the scripts that model the data collected from the user.
Present content:

- ***Repos.js*** - Code with the data from the requested repositories;
- ***User.js*** - Code with the requested user data.

#### View

Folder containing the scripts that have all the information obtained from the models for viewing in the browser.
Present content:

- ***ReposView.js*** - Code with the elements made available for viewing the requested repositories;
- ***UserView.js*** - Code with the elements made available for viewing the requested user;

