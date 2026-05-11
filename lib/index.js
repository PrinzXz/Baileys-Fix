import makeWASocket from './Socket/index.js';

console.log(`
\x1b[34m╭──────────────────────────────────────────────╮\x1b[0m
\x1b[34m│\x1b[0m                                              \x1b[34m│\x1b[0m
\x1b[34m│\x1b[0m   \x1b[1m\x1b[36mB A I L E Y S\x1b[0m \x1b[35m- F I X\x1b[0m                      \x1b[34m│\x1b[0m
\x1b[34m│\x1b[0m   \x1b[90mAdvanced WhatsApp Web API Library\x1b[0m          \x1b[34m│\x1b[0m
\x1b[34m│\x1b[0m   \x1b[32mMaintained by PrinzXz\x1b[0m                      \x1b[34m│\x1b[0m
\x1b[34m│\x1b[0m                                              \x1b[34m│\x1b[0m
\x1b[34m╰──────────────────────────────────────────────╯\x1b[0m
`);

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map