var { readdirSync } = require("fs");

export default async (client) => {
    for (let file of (readdirSync("events").filter(file => file.endsWith('.ts')))) {
       const event = require("../events/"+file).default;
       if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	   } else {
		client.on(event.name, (...args) => event.execute(...args, client));
      }
    }
}