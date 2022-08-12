import { create } from "@mui/material/styles/createTransitions";
import React, { useState, useEffect } from "react";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import classes from "./AdminPageChat.module.scss";

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

// function connect() {
//   var ws = new WebSocket("ws://localhost:8080");
//   ws.onopen = function () {
//     // subscribe to some channels
//     ws.send(
//       JSON.stringify({
//         //.... some message the I must send when I connect ....
//       })
//     );
//   };

//   ws.onmessage = function (e) {
//     console.log("Message:", e.data);
//   };

//   ws.onclose = function (e) {
//     console.log(
//       "Socket is closed. Reconnect will be attempted in 1 second.",
//       e.reason
//     );
//     setTimeout(function () {
//       connect();
//     }, 1000);
//   };

//   ws.onerror = function (err) {
//     console.error("Socket encountered error: ", err.message, "Closing socket");
//     ws.close();
//   };
// }

// connect();

const AdminPageChat: React.FC = () => {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div>
        <Chat />
      </div>
    </div>
  );
};

const Chat: React.FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      console.log("Close.ws");
      setTimeout(createChannel, 5000);
    };
    function createChannel() {
      ws?.removeEventListener("close", closeHandler);
      ws?.close();

      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws.addEventListener("close", closeHandler);
      setWsChannel(ws);
    }
    createChannel();
    return () => {
      ws.removeEventListener("close", closeHandler);
      ws.close();
    };
  }, []);

  return (
    <div>
      <Messages wsChannel={wsChannel} />
      <AddMessageForm wsChannel={wsChannel} />
    </div>
  );
};

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    let messageHandler = (e: MessageEvent) => {
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    };

    wsChannel?.addEventListener("message", messageHandler);

    return () => {
      wsChannel?.removeEventListener("message", messageHandler);
    };
  }, [wsChannel]);

  // useEffect(() => {
  //   wsChannel.addEventListener("message", (e: MessageEvent) => {
  //     console.log(e);
  //     const newMessages = JSON.parse(e.data);
  //     setMessages((prevMessages) => [...prevMessages, ...newMessages]);
  //   });
  // }, []);

  return (
    <div className={classes.chat_container}>
      {messages.map((m, index) => (
        <Message message={m} key={index} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <img src={message.photo} /> <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
};

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({
  wsChannel,
}) => {
  const [message, setMessage] = useState("");
  const [readyStatus, setReadyStatus] = useState<"pending" | "ready">(
    "pending"
  );

  useEffect(() => {
    let openHandler = () => {
      setReadyStatus("ready");
    };

    wsChannel?.addEventListener("open", openHandler);
    return () => {
      wsChannel?.removeEventListener("open", openHandler);
    };
  }, [wsChannel]);

  const sendMessage = () => {
    if (!message) {
      return;
    }

    wsChannel?.send(message);
    setMessage("");
  };
  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <button
          disabled={wsChannel === null || readyStatus !== "ready"}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AdminPageChat;
