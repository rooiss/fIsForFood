require('dotenv').config()

const config = {
  dbConfig: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'localdev',
    // ensures that the inferred type is string, not string | undefined
    password: process.env.DB_PASSWORD || '',
    database: 'vcrpg',
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
  },
}

export const getAppConfig = () => config