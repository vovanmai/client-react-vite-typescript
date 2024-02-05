import { io } from 'socket.io-client';

const URL:any = process.env.API_URL;

export default io(URL);