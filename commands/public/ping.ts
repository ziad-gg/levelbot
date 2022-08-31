export default {
    name: "ping",
    execute(ctx, client, args) {
     ctx.reply({content: "pong"});
  },
};