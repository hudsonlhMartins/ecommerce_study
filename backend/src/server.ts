import { app } from './app'
import { env } from './env'

app.listen(env.PORT).then(() => {
  console.log(`Server listening on port ${env.PORT}`)
})
