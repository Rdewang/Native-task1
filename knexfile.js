// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      host: 'localhost',
      database: 'myfirstdb',
      password: '8085',
      port: 5432,
    }
  },

  production: {
    client: 'pg',
    // connection: process.env.DATABASE_URL +`?ssl=true`,
    connection: "postgres://postgres:postgres154@pg-cod-dev.czlq5hstepxm.ap-south-1.rds.amazonaws.com:5432/rishabhdb",
    // connection: {
    //   user: 'postgres',
    //   host: 'http://pg-cod-dev.czlq5hstepxm.ap-south-1.rds.amazonaws.com/',
    //   database: 'rishabhdb',
    //   password: 'postgres154',
    //   port: 5432,
    // },
    
    migrations: {
      directory : './migrations'
    },
    useNullAsDefault : true
  }

};
