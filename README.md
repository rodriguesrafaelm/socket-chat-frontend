# Chat em Tempo Real com Socket.IO

Este projeto é uma interface desenvolvida utilizando React, para uma aplicação de comunicação em tempo real usando Socket.io. A aplicação permite que os usuários participem de conversas de chat de forma fluida e interativa.

## Principais Recursos

- **Prompt de Usuário:** A aplicação apresenta um prompt de usuário onde os usuários podem inserir o nome de usuário desejado antes de entrar no chat.
- **Comunicação em Tempo Real:** O Socket.IO possibilita a comunicação bidirecional em tempo real entre o servidor e os clientes, garantindo a entrega instantânea de mensagens e atualizações.
- **Exibição de Mensagens:** A interface do chat exibe as mensagens trocadas entre os usuários de forma organizada e em sequência.
- **Lista de Usuários:** A aplicação fornece uma lista dos usuários conectados no momento, permitindo que os usuários vejam quem mais está presente no chat.
- **Status da Conexão:** O status da conexão é exibido dinamicamente, indicando se o usuário está conectado ou desconectado.
- **Tratamento de Tempo Limite:** Um mecanismo de tempo limite é implementado para desconectar usuários inativos após um período especificado de inatividade.


## Tecnologias Utilizadas

- React
- TypeScript
- Socket.IO 
- Next.js

Backend da aplicação: https://github.com/rodriguesrafaelm/socket-chat-server

### Definir apelido
<details>
  <summary>Clique para saber mais</summary>
  <br>
  Uma interface simples para definir o nome a ser exibido no chat.
</details>
<img src="https://github.com/rodriguesrafaelm/socket-chat-frontend/assets/79672000/e68160d7-df66-44be-8496-d0954739f547" width="900"/>

### Chat
<details>
  <summary>Clique para saber mais</summary>
  <br>
  Lista de usuários dinâmica para exibir o participantes do chat.
</details>
<img src="https://github.com/rodriguesrafaelm/socket-chat-frontend/assets/79672000/531be91c-8c17-4f8a-b0d7-a9143d2caa4e" width="900" />

### Quando um usuário sai
<img src="https://github.com/rodriguesrafaelm/socket-chat-frontend/assets/79672000/3380b3a3-7e41-45ed-b7e5-634796056cee" width="900"/>

### Enquanto tenta se conectar
<details>
  <summary>Clique para saber mais</summary>
  <br>
  Caso o servidor fique fora do ar e volte em seguida, a conexão é reestabelecida.
</details>
<img src="https://github.com/rodriguesrafaelm/socket-chat-frontend/assets/79672000/091a154e-4b34-4d68-a863-1f010be823a9" width="900"/>

### Timeout
<details>
  <summary>Clique para saber mais</summary>
  <br>
  O servidor pode emitir um "timeoutError" para encerrar a aplicação.
</details>
<img src="https://github.com/rodriguesrafaelm/socket-chat-frontend/assets/79672000/42f9a19b-3315-4094-9366-d92bc4599668" width="900"/>

