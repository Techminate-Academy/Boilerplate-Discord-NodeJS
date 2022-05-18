module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		client.user.setPresence({activites:[{name: 'with disckod.js', type: 'player'}], status:'online'})
	},
};