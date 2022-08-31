var { readdirSync } = require("fs");

export default async (client) => {
    for (let folder of (readdirSync("commands") )) {
        for (let file of readdirSync("commands/"+folder).filter(file => file.endsWith(".ts"))) {
            const commnad = require("../commands/"+folder+"/"+file).default;
            client.commands.set(commnad.name, commnad);
        }
    }
}