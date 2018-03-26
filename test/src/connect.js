import connect from '../../src/connect';
import {createServer} from 'net';
import {
  WORKING_DIR,
} from '../helpers/constants';
import promisify from '../../src/utils/promisify';
import rimraf from 'rimraf';
import Collector from '../helpers/collector';
import getSocket from '../../src/utils/socket';

const primraf = promisify(rimraf);

const name = 'name';
const workingDir = WORKING_DIR;
const message = 'this is a message';

describe('connect', () => {
  let echo;
  let close;
  let out;

  beforeEach(async () => {
    await primraf(WORKING_DIR);
    out = new Collector(message);
    const server = createServer((client) => {
      client.on('data', out.write.bind(out));
    });
    const listen = promisify(server.listen.bind(server));
    close = promisify(server.close.bind(server));
    await listen(await getSocket({
      workingDir,
      name,
      server: true,
    }));
    echo = await connect({
      workingDir,
      name,
    });
    await echo(message);
  });

  afterEach(async () => {
    await echo.end();
    await close();
  });

  it('should write the message to the server', async () => {
    await out.match;
  });
});
