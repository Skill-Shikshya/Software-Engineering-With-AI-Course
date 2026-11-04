import http from "node:http"
import "dotenv/config"

const app = http.createServer((req,res) => {
   console.log("this is the req url", req.url);
   console.log("this is the req method", req.method);
   const urlObj = new URL(req.url, `http://localhost:3000${req.url}`);
      console.log("urlObj", urlObj);
   res.write("okay done");
   res.end();
})

app.listen(process.env.PORT, () => {
console.log(`the app is listening in ${process.env.PORT}`)
});
