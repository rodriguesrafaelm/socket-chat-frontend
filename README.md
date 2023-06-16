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
