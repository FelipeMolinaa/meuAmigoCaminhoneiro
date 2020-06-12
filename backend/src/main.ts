import express from 'express'
import routes from './routes'
import cors from 'cors'

let app = express();

app.use(cors)
app.use(express.json())
app.use(routes)

app.listen(3333)