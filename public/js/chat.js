document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("message-input");
  const usernameElement = document.getElementById("username");
  const messageBox = document.getElementById("message-box");

  const socket = io();

  document.querySelector("button").addEventListener("click", () => {
    const messageContent = messageInput.value.trim();

    if (messageContent !== "") {
      // Obtener el nombre de usuario de la página
      const username = usernameElement.textContent;

      // Enviar el mensaje al servidor a través de Socket.IO
      socket.emit("sendMessage", { username, messageContent });

      // Mostrar el mensaje junto con el nombre del usuario en el cuadro de mensajes
      const messageDiv = document.createElement("div");
      messageDiv.innerHTML = `<span class="text-sm">${username}</span><p class="pt-none">${messageContent}</p>`;
      messageBox.appendChild(messageDiv);

      messageInput.value = "";
    }
  });

  // Manejar la recepción de mensajes del servidor
  socket.on("receiveMessage", ({ username, messageContent }) => {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<span class="text-sm">${username}</span><p class="pt-none">${messageContent}</p>`;
    messageBox.appendChild(messageDiv);
  });
});
