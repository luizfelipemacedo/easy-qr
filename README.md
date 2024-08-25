# 🤳 Easy QR

Um aplicativo simples e intuitivo para escanear códigos QR. Apenas aponte, escaneie e pronto. Sem frescuras, apenas resultados.

## 📑 Índice

- [🚀 Recursos](#-recursos)
- [📦 Instalação](#-instalação)
- [▶️ Executando o Projeto](#️-executando-o-projeto)
- [📋 Dependências](#-dependências)
- [🤝 Contribuição](#-contribuição)

## 🚀 Recursos

- **📱 Escaneamento de QR Code:** Escaneie rapidamente códigos QR com a câmera do seu dispositivo.
- **✂️ Integração com a Área de Transferência:** Copie os resultados escaneados diretamente para a sua área de transferência.
- **📳 Feedback Tátil:** Receba feedback tátil quando um código QR for escaneado com sucesso.
- **🌐 Multiplataforma:** Funciona em Android, iOS e Web.

## 📦 Instalação

Este projeto utiliza [Bun](https://bun.sh/) em vez de Node.js. Certifique-se de ter o Bun instalado antes de continuar.

1. Clone o repositório:

   ```sh
   git clone https://github.com/luizfelipemacedo/easy-qr.git
   cd easy-qr
   ```

2. Instale as dependências:

   ```sh
   bun install
   ```

## ▶️ Executando o Projeto

Você pode executar o projeto em diferentes plataformas usando os scripts definidos no `package.json`. Certifique-se de rodar esses comandos no diretório raiz do projeto.

- **Iniciar o servidor de desenvolvimento:**

  ```sh
  bun start
  ```

## 📋 Dependências

- **Expo SDK 51**
- **React 18.2.0**
- **React Native 0.74.3**
- **Expo Camera, Clipboard, Haptics, Status Bar, Web Browser**
- **Nativewind para estilização**
- **Tailwind CSS para CSS utilitário**

Para uma lista completa das dependências, consulte o arquivo `package.json`.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, faça um fork do repositório e envie um pull request.

1. Faça um fork do repositório.
2. Crie uma nova branch (`git switch -c feature-branch`).
3. Faça suas alterações.
4. Commit suas alterações (`git commit -m 'Adicione uma nova funcionalidade'`).
5. Envie para a branch (`git push origin feature-branch`).
6. Abra um pull request.