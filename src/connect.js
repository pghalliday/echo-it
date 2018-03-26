import {createConnection} from 'net';
import promisify from './utils/promisify';
import getSocket from './utils/socket';

export default async function connect({workingDir, name}) {
  const client = createConnection(await getSocket({
    workingDir,
    name,
  }));
  const echo = promisify(client.write.bind(client));
  echo.end = promisify(client.end.bind(client));
  return echo;
}
