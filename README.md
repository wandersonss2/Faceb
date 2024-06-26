
# Faceboki

Faceboki é um aplicativo de rede social desenvolvido com React Native e uma API backend construída com Node.js, Express e MongoDB. O aplicativo permite que os usuários façam login, se registrem, visualizem perfis de usuários, publiquem posts e interajam com outros usuários através de um feed de posts.

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Recursos

- Registro e login de usuários com autenticação JWT.
- Visualização e atualização de perfis de usuários.
- Publicação de posts com imagens e textos.
- Interação com posts (curtir, comentar).
- Navegação intuitiva entre telas.

## Instalação

### Pré-requisitos

- Node.js e npm instalados.
- MongoDB instalado e em execução.

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/faceboki.git
cd faceboki
```

## Configuração

### Backend (API)

1. Navegue para a pasta `api`:

    ```bash
    cd api
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na pasta `api` e adicione as seguintes linhas:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/faceboki
    JWT_SECRET=sua_chave_secreta_jwt
    ```

4. Inicie o servidor:

    ```bash
    npm run dev
    ```

### Frontend (React Native)

1. Navegue para a pasta `frontend`:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure a URL da API:

    Crie um arquivo `config.js` na pasta `frontend` e adicione a URL base da API:

    ```javascript
    const API_BASE_URL = 'http://<seu-endereco-ip>:5000/api';
    export default API_BASE_URL;
    ```

4. Inicie o aplicativo:

    ```bash
    npm start
    ```

## Execução

### Backend

Certifique-se de que o MongoDB está em execução e inicie o servidor backend:

```bash
cd api
npm run dev
```

### Frontend

Inicie o servidor de desenvolvimento do React Native:

```bash
cd frontend
npm start
```

Use o aplicativo Expo Go em seu dispositivo móvel ou um emulador para visualizar o aplicativo.

## Estrutura do Projeto

```
faceboki
├── api
│   ├── src
│   │   ├── controllers
│   │   │   ├── accountController.js
│   │   │   └── authController.js
│   │   ├── models
│   │   │   └── accountModel.js
│   │   ├── repositories
│   │   │   └── accountRepository.js
│   │   ├── routes
│   │   │   ├── accountRoutes.js
│   │   │   └── authRoutes.js
│   │   ├── services
│   │   │   ├── accountService.js
│   │   │   └── authService.js
│   │   ├── middleware
│   │   │   └── authMiddleware.js
│   │   └── app.js
│   ├── config
│   │   └── db.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── frontend
│   ├── .expo/
│   ├── .git/
│   ├── assets/
│   ├── node_modules/
│   ├── screens/
│   │   ├── CreatePostScreen.js
│   │   ├── CreatePostScreenStyles.js
│   │   ├── FeedScreen.js
│   │   ├── FeedScreenStyles.js
│   │   ├── HomeScreen.js
│   │   ├── HomeScreenStyles.js
│   │   ├── LoginScreen.js
│   │   ├── LoginScreenStyles.js
│   │   ├── ProfileScreen.js
│   │   ├── ProfileScreenStyles.js
│   │   ├── RegisterScreen.js
│   │   └── RegisterScreenStyles.js
│   ├── services/
│   │   ├── authService.js
│   │   └── accountService.js
│   ├── .gitignore
│   ├── App.js
│   ├── app.json
│   ├── babel.config.js
│   ├── package-lock.json
│   └── package.json
```

## Tecnologias Utilizadas

- **Frontend**: React Native, Expo, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt

## Contribuição

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutir as mudanças que deseja fazer.

1. Faça um fork do projeto.
2. Crie uma branch com a nova feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
