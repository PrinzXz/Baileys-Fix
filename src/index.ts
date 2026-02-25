import makeWASocket from './Socket/index'
import { DEFAULT_CONNECTION_CONFIG } from './Defaults/index'

const _version = DEFAULT_CONNECTION_CONFIG.version.join('.')
console.log(`
\x1b[36m====================================================\x1b[0m
\x1b[1m\x1b[32m [ BAILEYS-FIX BY PRINZXZ ]\x1b[0m
 \x1b[33mWA Version:\x1b[0m v${_version}
 \x1b[33mFeatures:\x1b[0m   EugenHandler, StickerPack, Carousel
 \x1b[33mStatus:\x1b[0m     Library Loaded Successfully
\x1b[36m====================================================\x1b[0m
`)

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
