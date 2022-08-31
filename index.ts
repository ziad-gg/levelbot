const { Client, Collection, GatewayIntentBits  } = require("discord.js");
const { token, prefix } = require('./config/config').default;
const { usersData, guildData } = require("./database/main").default;
const { readdirSync } = require("fs");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});


async function setUp(client) {
    client.commands = new Collection();
    client.database = {
        usersData,
        guildData
    }
    client.prefix = prefix;
    for (let file of (readdirSync("handlers")).filter(file => file.endsWith('.ts') )) {
        const handler = require("./handlers/"+file).default(client);
    }
}

setUp(client);
client.login(token)

