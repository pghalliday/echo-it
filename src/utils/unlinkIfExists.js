import {
  existsSync,
  unlink,
} from 'fs';
import promisify from './promisify';

const punlink = promisify(unlink);

// istanbul ignore next
async function unlinkIfExists(file) {
  if (existsSync(file)) {
    await punlink(file);
  }
}

export default unlinkIfExists;
