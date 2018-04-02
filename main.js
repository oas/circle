const Discord = require("discord.js");

const fetch = require("node-fetch");

async function Main() {
	Main.client = new Discord.Client();
	await Main.client.login(process.argv[2]);

	setInterval(async function() {
		const request = await fetch("https://www.reddit.com/r/CircleOfTrust.json");
		if(request.status === 403) {
			// The subreddit is not yet public.
			return;
		}

		await Main.client.channels.get(Main.CHANNEL_ID).send("The subreddit CircleOfTrust is public now! Check it out: https://www.reddit.com/r/CircleOfTrust");
	}, 1000);
}

Main.client = null;

Main.CHANNEL_ID = 429833833823862804;

Main();