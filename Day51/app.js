import express from "express"
import {readFile, writeFile} from "fs/promises";
import cors from "cors"
import morgan from "morgan"
import BooksRoute from "./Router/book.js"
const app = express();
app.use(cors({
   origin:"http://localhost:5173",
   methods:["GET"]
})
)

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
 
app.get("/api/", (_,res) => res.send("hello"));

app.get("/index.html", async (req,res) => {
   const indexHtmlFile = await readFile("./public/index.html", "utf-8");
   console.log("the file has", indexHtmlFile);
   res.send(indexHtmlFile);
});

app.use("/api/books", BooksRoute);

app.get("/api/authors", async(_req,res) => {
   const author = await readFile('author.json', 'utf-8');
   let dataArr;
   if(author){
      dataArr = JSON.parse(author);
   }  
   console.log("contents of author.json", dataArr);
   res.json({data: dataArr || []});
});

app.use((err,_req,res,_next) => {
   console.log(err);
   res.send(err)
});

app.listen(3000, () => {
   console.log("server is listening on 3000")
});
