#!/usr/bin/env node

/**
 * tsf-cli
 * demo cli teached by ahmad awais
 *
 * @author tawseef ahmad <tsf.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const episodes = require('./utils/episodes');

const input = cli.input;
const flags = cli.flags;
const { clear, debug , boop} = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	// show a BOOP if flag is set
	boop && console.log('BOOP!')
	
	flags.episodes && ( await episodes());
	debug && log(flags);
})();
