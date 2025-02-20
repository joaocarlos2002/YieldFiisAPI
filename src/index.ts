import { server } from "./server/server";

server.listen(process.env.PORT || 1234, () => console.log(`Server is running on localhost:${process.env.PORT || 12345}`));