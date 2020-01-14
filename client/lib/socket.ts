import io from "socket.io-client";

const uri: string =
  process.env.NODE_ENV === "development"
    ? "https://staging.nest.nm.cs.uec.ac.jp"
    : `https://${process.env.WS_HOST}`;
export const socket = io(uri);
