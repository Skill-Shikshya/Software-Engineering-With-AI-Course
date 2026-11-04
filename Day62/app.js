import express from "express"
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { createClient } from "redis";
import { neonConfig } from "@neondatabase/serverless";
import rateLimit from "express-rate-limit"
import ws from "ws";
const app = express();
const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return standard rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the outdated `X-RateLimit-*` headers
  message: {
    status: 429,
    error: 'Too many requests from this IP, please try again after 15 minutes.',
  },
});

app.use(apiLimiter);


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
const WINDOW_SECONDS = 60
const MAX_REQUESTS = 3
const basicRateLimiter = async (req, res, next) => {
  const ip = req.ip;
  const key = `rate_limit:${ip}`;

  try {
    // Increment the request count for this IP
    const requests = await redisClient.incr(key);
    console.log(requests);
   //console.log(the key value", redis.get(key));
    // If it's the first request in the current window, set the expiration timer
    if (requests === 1) {
      await redisClient.expire(key, WINDOW_SECONDS);
    }

    // Check if the limit has been exceeded
    if (requests > MAX_REQUESTS) {
      res.status(429).json({ error: 'Too many requests, please try again later.' });
      return;
    }

    next();
  } catch (error) {
    console.error('Redis rate limiter error:', error);
    // Fail-open: allow request to proceed if Redis fails
    next();
  }
};

//app.use(basicRateLimiter);
 
//runRedisExample();

// 1. Tell Neon to use the 'ws' package for WebSockets in Node.js
//neonConfig.webSocketConstructor = ws;

// 2. Initialize adapter and Prisma Client
//const adapter = new PrismaNeon({
//  connectionString: process.env.NDB.trim()
//});
export const prisma = new PrismaClient();

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
         email: "test@gmail.com"
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

