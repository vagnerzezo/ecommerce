## E-commerce Vue.js 3 🛍️

Este projeto é uma loja de e-commerce construída utilizando Vue.js 3. Ele consome a API da [Fake Store API](https://fakestoreapi.com/) para obter todas as informações dos produtos, incluindo detalhes, preços e categorias.

Link: https://ralau-closet.vercel.app/

## Descrição do Projeto 📔

Este projeto tem como objetivo fornecer uma plataforma de e-commerce onde os usuários podem visualizar produtos, adicionar ao carrinho e fazer compras simuladas. O projeto utiliza a Fake Store API para obter dados de produtos em tempo real.

## Funcionalidades ⚙️

- Listagem de produtos
- Visualização de detalhes do produto
- Adição e remoção de produtos no carrinho de compras
- Interface responsiva

## Instalação 🔩

Para clonar o repositório, você pode usar o GitHub CLI ou o HTTPS.

### GitHub CLI 🖥️

```bash
gh repo clone vagnerzezo/ecommerce
```

### HTTPS 🖥️

```bash
git clone https://github.com/vagnerzezo/ecommerce.git
```

Depois de clonar o repositório, navegue até a pasta do projeto e instale as dependências:

```bash
cd ecommerce
npm install
```

## Configuração ⚙️

Não é necessária configuração adicional para executar este projeto. As configurações de API estão prontas para uso.

## Uso 🔩

Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```

Abra [http://localhost:8080](http://localhost:8080) para ver o projeto no navegador. A página será recarregada automaticamente se você fizer alterações no código.

Para construir o projeto para produção:

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist`.

Para verificar e corrigir problemas de linting:

```bash
npm run lint
```

## Scripts Disponíveis 🖥️

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o aplicativo para produção na pasta `dist`.
- `npm run lint`: Verifica e corrige problemas de linting.

## Estrutura do Projeto 📓

```plaintext
ecommerce/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── store/
│   ├── App.vue
│   ├── main.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **public/**: Arquivos estáticos e o arquivo HTML principal.
- **src/**: Contém todo o código-fonte do projeto.
  - **assets/**: Arquivos de mídia, como imagens.
  - **components/**: Componentes Vue reutilizáveis.
  - **views/**: Páginas do aplicativo.
  - **store/**: Configuração do Vuex para gerenciamento de estado.
  - **App.vue**: Componente raiz do aplicativo.
  - **main.js**: Arquivo de entrada do aplicativo.

## Tecnologias Utilizadas ⚙️

- [Vue.js 3](https://vuejs.org/): Framework JavaScript para construir interfaces de usuário.
- [Vuex](https://vuex.vuejs.org/): Gerenciamento de estado para Vue.js.
- [Axios](https://axios-http.com/): Cliente HTTP baseado em Promises para o navegador e node.js.
- [Bootstrap](https://getbootstrap.com/): Framework CSS para desenvolvimento de front-end.
- [Swiper](https://swiperjs.com/): Biblioteca de sliders.


## Contato 📩

Vagner Xavier - [vagnerzezo@live.com](mailto:vagnerzezo@live.com)

Projeto Link: [https://github.com/vagnerzezo/ecommerce](https://github.com/vagnerzezo/ecommerce)
