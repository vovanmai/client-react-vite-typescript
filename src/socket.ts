import { io } from 'socket.io-client';

const URL = 'https://express-chat-3ee4.onrender.com';

// const URL = 'http://localhost:3007';

export default io(URL);