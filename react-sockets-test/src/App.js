// import socketIOClient from "socket.io-client";
// const socket = socketIOClient("http://localhost:4000/");
// socket.on("connect", function() {
//   socket.send("hi");
//
//   socket.on("message", function(msg) {
//     // my msg
//   });
// });

import React from "react";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
