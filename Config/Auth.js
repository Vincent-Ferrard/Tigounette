import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import {AsyncStorage} from 'react-native'
const auth = require('@feathersjs/authentication-client');

const socket = io('https://api.tigounette.matteogassend.com', {
    transports: ['websocket'],
    forceNew: true
});

const app = feathers();

app.configure(socketio(socket, {
    pingInterval: 10000,
    pingTimeout: 50000
  }));
app.configure(auth({ storage: AsyncStorage }));

export default app;