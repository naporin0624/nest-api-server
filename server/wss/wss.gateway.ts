import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class WssGateway {
  @WebSocketServer()
  wss: Server;
}
