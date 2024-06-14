import { MensagemProtocol } from '../classes/interfaces-protocolos/mensagem-protocol';

export class Messaging implements MensagemProtocol {
  sendMessage(msg: string): void {
    console.log(msg);
  }
}
