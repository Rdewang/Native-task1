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

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    // connection: process.env.DATABASE_URL +`?ssl=true`,
    connection: process.env.DATABASE_URL,
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory : './migrations'
    },
    useNullAsDefault : true
  }

};
