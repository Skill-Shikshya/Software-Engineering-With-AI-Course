import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { createClient } from "redis";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";
const app = express();
const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const redisClient = createClient({
  url: "redis://localhost:6379"
});

// Handle connection errors
redisClient.on("error", (err) => console.log("Redis Client Error", err));
 
try {
    await redisClient.connect();
    console.log("Connected to Redis successfully!");
  }
catch(err){
   console.log("connection error to Redis")
}
 
//runRedisExample();

// 1. Tell Neon to use the 'ws' package for WebSockets in Node.js
neonConfig.webSocketConstructor = ws;

// 2. Initialize adapter and Prisma Client
const adapter = new PrismaNeon({
  connectionString: process.env.NDB.trim()
});
export const prisma = new PrismaClient({ adapter });

try{
   const client = await prisma.$connect();
   console.log("connected successfully");
   await prisma.$disconnect();
}catch(err){
   console.log("some err", err);
}

app.get("/", async (req,res) => {
   try{
   const user = await prisma.users.findUnique({
      where: {
         id:1
      }
   });
      const userName = await redisClient.get("name");
      console.log("this is the userName", userName);
      const userOne = {...user, phone: user.phone.toString()}
      console.log("the user", user);
      res.json({neonData:userOne, redisData:userName});
   }catch(err){
      console.log("the errr:",err);
      res.json(err)
   }
})

app.listen(PORT, () => console.log(`app running on ${PORT}`));

