import io from "socket.io-client";

const uri: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.WS_HOST}`;
export const socket = io(uri);
