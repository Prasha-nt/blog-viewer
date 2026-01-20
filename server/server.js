import jsonServer from "json-server"
import cors from "cors"

const server = jsonServer.create()
const router = jsonServer.router("./db.json")
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(middlewares)

// ❗ IMPORTANT: use router directly
server.use(router)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`🚀 JSON Server running at http://localhost:${PORT}`)
})
