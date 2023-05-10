import { ExpressPeerServer } from 'peer';
import cors from 'cors';
const app = ExpressPeerServer();
app.use(cors());

export default function () {
  // Peer Server
  this.peer = ExpressPeerServer(this.server, {
    ssl: this.ssl,
    debug: true,
    path: '/',
    proxied: true,
  });

  this.express.use('/peerserver', this.peer);

  console.log('=> Peer Server Started!');
}