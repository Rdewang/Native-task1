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
    connection: process.env.DATABASE_URL,
    
    migrations: {
      directory : './migrations'
    },
    useNullAsDefault : true
  }

};
