import io from "socket.io-client";

const uri: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : `http://${process.env.WS_HOST}:${process.env.WS_PORT}`;
export const socket = io(uri);
