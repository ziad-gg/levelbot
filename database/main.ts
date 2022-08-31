const { database, connect } = require("quickfirebase.ts");
const { firebaseConfig, databaseConfig } = require('../config/config').default;
connect(firebaseConfig);


export default {
  usersData: new database({name: "usersData", default: databaseConfig.users }),
  guildData: new database({name: "guildsData", default: databaseConfig.users})
};
