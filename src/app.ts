import express from 'express'
import bodyParser from 'body-parser'
import { setupGraphql } from './middleware/graphql'
import { setupDB } from './setup-db'

export const app = express()
setupGraphql(app)
setupDB()
