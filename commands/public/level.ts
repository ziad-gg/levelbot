const canvacord = require("canvacord");
const { AttachmentBuilder } = require("discord.js");
var { usersData, guildData } = require("../../database/main").default;


export default {
    name: "level",
 async execute(ctx, client, args) {
      const userData = await usersData.findOne(ctx.author.id);
    
      const rank = new canvacord.Rank()
        .setAvatar(ctx.author.displayAvatarURL({ dynamic: false, format: 'png' }))
        .setCurrentXP(Number(userData.data.profile.xp))
        .setRank(userData.data.profile.level, 'RANK', true)
        .setRequiredXP(userData.data.profile.requireXp)
        .setStatus("dnd")
        .setProgressBar("#FFFFFF", "COLOR")
        .setUsername(ctx.author.username)
        .setDiscriminator("0007");

rank.build().then(data => {
        const attachment = new AttachmentBuilder(data, "RankCard.png");
        ctx.channel.send({files: [attachment]});
    });
  },
};