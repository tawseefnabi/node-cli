const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	boop:{
		type: 'boolean',
		alias: 'b',
		desc:'Print boop version'
	},
	episodes: {
		type: 'boolean',
		default: true,
		desc: "print episodes info"
	}
};

const commands = {
	help: { desc: `Print help info` }
	
};

const helpText = meowHelp({
	name: `tsf`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
