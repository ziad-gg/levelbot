var { usersData, guildData } = require("../database/main").default;

export default {
    name: "messageCreate",
    once: false,
    async execute(message, client) {
   
      
      const user = await usersData.findOne(message.author.id);
      if (!user)  await usersData.set(message.author.id);
      if (user) {
      const requireXp =  user.data.profile.level * 1000;
      if (user.data.profile.xp  >= requireXp) {
        user.data.profile.requireXp +=  1000;
        user.data.profile.level += 1;
        user.data.profile.xp -= user.data.profile.xp;
        return user.save();
      }
      user.data.profile.xp += parseInt(message.content.length) / 2;
      user.data.profile.requireXp  = requireXp;
      user.save();
      }
   
      
     
    },
};