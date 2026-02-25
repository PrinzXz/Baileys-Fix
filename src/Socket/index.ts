import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	const _version = newConfig.version.join('.')
	newConfig.logger.info(`WA v${_version}`)
	console.log(`[ BAILEYS ] Using Baileys-Fix by PrinzXz ✨ (WA v${_version})`)

	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
