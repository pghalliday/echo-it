import {Writable} from 'stream';

export default class Collector extends Writable {
  constructor(expected) {
    super();
    this.buffer = Buffer.alloc(0);
    this.expected = Buffer.from(expected);
    this.match = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  _write(chunk, encoding, callback) {
    this.buffer = Buffer.concat([this.buffer, chunk]);
    if (this.buffer.equals(this.expected)) {
      this.resolve();
    } else if (
      !this.buffer.equals(this.expected.slice(0, this.buffer.length))
    ) {
      this.reject(
        new Error('expected ' + this.buffer + ' to match ' + this.expected)
      );
    }
    callback();
  }
}
