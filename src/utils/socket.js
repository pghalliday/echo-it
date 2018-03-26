import promisify from './promisify';
import {
  readFile,
  writeFile,
  unlink,
} from 'fs';
import {
  v1 as uuid,
} from 'uuid';
import path from 'path';
import sanitize from 'sanitize-filename';
import mkdirp from 'mkdirp';
import {
  DEFAULT_WORKING_DIR,
} from '../cli/constants';

const pmkdirp = promisify(mkdirp);
const punlink = promisify(unlink);
const preadFile = promisify(readFile);
const pwriteFile = promisify(writeFile);

// istanbul ignore next
async function getSocket({
  server = false,
  workingDir = DEFAULT_WORKING_DIR,
  name,
}) {
  await pmkdirp(workingDir);
  const file = path.join(workingDir, sanitize(name, {
    replacement: '__',
  }));
  if (server) {
    await punlink(file);
  }
  if (process.platform === 'win32') {
    // windows uses named pipes which have
    // a flat namespace so for the server
    // we will generate a pipe name
    // and for the client we will read the
    // pipe name
    if (server) {
      const namedPipe = `\\\\.\\pipe\\${uuid()}`;
      await pwriteFile(file, namedPipe);
      return namedPipe;
    } else {
      const namedPipe = await preadFile(file);
      return namedPipe.toString();
    }
  } else {
    // Otherwise use a unix socket
    return file;
  }
}

export default getSocket;
