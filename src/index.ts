import { server } from "./api";


server.listen(3000, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})