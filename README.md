
<h1 align="center">maps-syonet</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/moisespompilio/maps-syonet?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/moisespompilio/maps-syonet?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/moisespompilio/maps-syonet?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/moisespompilio/maps-syonet?color=56BEB8">

</p>


<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/moisespompilio" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

O projeto Front-end foi desenvolvido em React, TypeScript e Vite, como solução para o desafio técnico proposto pela Syonet. O objetivo principal do desafio era criar um Front-end responsivo capaz de consumir a API do Google Maps para localizar e marcar um ponto específico no mapa.

A estrutura do projeto segue uma organização em pastas dentro do diretório "src". Vamos detalhar cada uma dessas pastas:

Components: Nesta pasta, estão armazenados os componentes da aplicação. Cada componente possui sua própria lógica de negócio e estilização, permitindo uma separação clara e uma abordagem modular do código.

Pages: Aqui são encontradas as páginas da aplicação. Cada página possui sua própria lógica de negócio e estilização, tornando mais fácil a compreensão e manutenção do código. Cada página é tratada como uma unidade independente, facilitando a navegação e a interação do usuário.

Util: A pasta "util" armazena funções utilitárias do projeto. Essas funções têm como objetivo facilitar tarefas comuns e promover a reutilização de código em diferentes partes da aplicação. Elas podem incluir formatação de dados, cálculos ou operações auxiliares.

Assets: Por fim, a pasta "assets" contém os arquivos estáticos da aplicação, como imagens e ícones. Esses recursos são utilizados para aprimorar a experiência visual e estética da aplicação.

Além das pastas mencionadas, na raiz do projeto também estão presentes o arquivo ".env" (esse arquivo deve ser criado antes de iniciar o projeto, seguindo o exemplo fornecido em ".env.example"), responsável pelas variáveis de ambiente, e os arquivos relacionados ao Docker, como o "docker-compose.yml" e o "Dockerfile", que auxiliam na configuração e implantação do projeto.

Com essa organização e estrutura, o projeto busca proporcionar uma leitura facilitada e um estilo claro, promovendo a manutenibilidade e a escalabilidade do código. A separação das responsabilidades em cada pasta e a utilização de boas práticas de desenvolvimento visam facilitar a compreensão, manutenção e evolução do projeto ao longo do tempo.

## :sparkles: Features ##

:heavy_check_mark: [marker-component] Construção dos componentes de marcação do mapa integrados à API do Google Maps;\

:heavy_check_mark: [home-page] Construção da tela inicial, conhecida como página inicial (home page), que exibe os componentes de mapa e um campo de entrada para alteração de localização;\

:heavy_check_mark: [tests] implementação dos testes para garantir a qualidade e robustez da aplicação;


## :rocket: Technologies ##

Às seguintes tecnologias foram utilizadas neste projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## :white_check_mark: Requirements ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Docker](https://www.docker.com/) instalados.

## :checkered_flag: Starting ##

```bash
# Clone do projeto
$ git clone https://github.com/moisespompilio/maps-syonet.git

# Acesso
$ cd maps-syonet

#Antes de iniciar é necessario criar o arquivo .env, seguindo o exemplo fornecido em ".env.example"
# Start Docker
$ docker-compose up --build

# O server vai iniciar em <http://localhost:8081>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/moisespompilio" target="_blank">Moises Pompilio</a>

&#xa0;

<a href="#top">Back to top</a>
