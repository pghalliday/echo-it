import {createServer} from 'net';
import promisify from './utils/promisify';
import getSocket from './utils/socket';

export default async function listen({workingDir, name, out}) {
  const server = createServer((client) => {
    client.on('data', out.write.bind(out));
  });
  const _listen = promisify(server.listen.bind(server));
  const _close = promisify(server.close.bind(server));
  await _listen(await getSocket({
    workingDir,
    name,
    server: true,
  }));
  return _close;
}
