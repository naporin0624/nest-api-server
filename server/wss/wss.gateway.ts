import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway(8000)
export class WssGateway {
  @WebSocketServer()
  wss: Server;
}
