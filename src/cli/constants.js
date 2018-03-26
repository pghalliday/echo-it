export const WORKING_DIRECTORY_VAR = 'ECHO_IT_WORKING_DIRECTORY';
export const DEFAULT_WORKING_DIR = '.echo-it';
export const USAGE_TEXT = `
Usage: echo-it [options] <name>

Start an echo-it server with the given name

Environment Variables:

${WORKING_DIRECTORY_VAR}

<name>: The name of the server

Options:
`;
// eslint-disable-next-line max-len
export const MULTIPLE_WORKING_DIRECTORIES_ERROR = 'Working directory specified multiple times';
export const NO_NAME_ERROR = 'Name not specified';
