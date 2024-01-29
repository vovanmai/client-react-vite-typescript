import { io } from 'socket.io-client';

const URL = 'https://express-chat-3ee4.onrender.com';

export default io(URL);