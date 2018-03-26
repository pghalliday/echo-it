import listen from '../../src/listen';
import {createConnection} from 'net';
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

describe('listen', () => {
  let close;
  let client;
  let out;

  beforeEach(async () => {
    await primraf(WORKING_DIR);
    out = new Collector(message);
    close = await listen({
      name,
      workingDir,
      out,
    });
    client = createConnection(
      await getSocket({
        workingDir,
        name,
      }),
    );
    client.write(message);
  });

  afterEach(async () => {
    client.end();
    await close();
  });

  it('should write the message to the output stream', async () => {
    await out.match;
  });
});
