// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      user:     'root',
      password: '',
      database: 'db_omnistack'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  test: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      user:     'root',
      password: '',
      database: 'test_omnistack'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      user:     'root',
      password: '',
      database: 'omnistack'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
