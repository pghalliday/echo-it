import {createConnection} from 'net';
import promisify from './utils/promisify';
import getSocket from './utils/socket';

export default async function connect({workingDir, name}) {
  const socket = createConnection(await getSocket({
    workingDir,
    name,
  }));
  const echo = promisify(socket.write.bind(socket));
  echo.end = promisify(socket.end.bind(socket));
  echo.socket = socket;
  return echo;
}
