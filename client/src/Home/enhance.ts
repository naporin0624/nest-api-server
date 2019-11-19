import * as React from "react";
import io from "socket.io-client";

export default () => {
  const [msg, setMsg] = React.useState("Welcome");
  React.useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("add_tags", (data: number) => {
      console.log(data);
    });
    socket.on("exception", (data: any) => {
      console.log("event", data);
    });
    socket.on("disconnect", () => {
      console.log("Disconnected");
    });
  }, []);

  return { msg, setMsg };
};
