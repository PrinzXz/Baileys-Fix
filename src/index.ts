import makeWASocket from './Socket/index'
import { DEFAULT_CONNECTION_CONFIG } from './Defaults/index'

const _version = DEFAULT_CONNECTION_CONFIG.version.join('.')
console.log(`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ✨ BAILEYS-FIX BY PRINZXZ
┃ ➔ WA Version: v${_version}
┃ ➔ Features: EugenHandler, StickerPack, Carousel
┃ ➔ Status: 🚀 Library Loaded Successfully
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
