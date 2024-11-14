# Chat Criptografado

## Passos para Deploy na Railway

1. **Clone o repositório para o GitHub**:

   - Faça o upload do projeto para o GitHub.

2. **Deploy do Back-end na Railway**:

   - Acesse [Railway](https://railway.app/).
   - Crie um novo projeto e conecte-o ao repositório GitHub.
   - A Railway detectará o `package.json` e usará o script `start` para iniciar o servidor.

3. **Deploy do Front-end na Vercel**:

   - Suba apenas o front-end na Vercel.
   - Aponte o `client.js` para o servidor WebSocket da Railway.

4. **Testar a aplicação**:
   - Acesse a URL da Vercel e veja seu chat funcionando online.
