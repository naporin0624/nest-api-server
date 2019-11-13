import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway(8000)
export class WssGateway {
  @WebSocketServer()
  wss: Server;

  @SubscribeMessage("add_tags")
  addTags(): WsResponse<void> {
    return;
  }
}
