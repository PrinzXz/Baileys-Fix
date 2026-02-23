"use strict";
import makeWASocket from "./Socket/index.js";
import EugenHandler from "./Socket/eugen-handler.js";

const info = `
┌──────────────────────────────────────────────┐
│  📦 Package: @prinzxz/baileys-fix            │
│  🔖 Version: 1.1.8                           │
│  👤 Solo Developer Project                   │
│   For Personal Use Only                    │
│  🔗 Available exclusively on GitHub          │
│     (github.com/PrinzXz/Baileys-Fix)         │
└──────────────────────────────────────────────┘
`;

console.log(info);
console.log("🎯 Initializing Baileys Socket Connection...\n");

export * from "../WAProto/index.js";
export * from "./Utils/index.js";
export * from "./Store/index.js";
export * from "./Types/index.js";
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "./WAM/index.js";
export * from "./WAUSync/index.js";
export { EugenHandler, makeWASocket };
export default makeWASocket;
