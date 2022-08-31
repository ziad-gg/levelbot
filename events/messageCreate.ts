export default {
    name: "messageCreate",
  async execute(message, client) {
        
    if (!message.content.startsWith(client.prefix)) return

     var args = message.content.slice(client.prefix.length).split(/ +/i);
     var cmd = args.shift().toLowerCase();
    
     var command = client.commands.get(cmd);
     if (command) command.execute(message, client, args)
  }
}