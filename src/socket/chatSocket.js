const chatSocket = (socketServer) => {
  socketServer.on("connection", (socket) => {
    console.log("connected", socket.id);
    socket.on("message", (data) => {
      socketServer.emit("new_message", data);
    });
  });
};

export default chatSocket;
