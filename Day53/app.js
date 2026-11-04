import express from "express"
import {readFile, writeFile} from "fs/promises";
import {createStream} from "rotating-file-stream"
import cors from "cors"
import path from "path"
import multer from "multer"
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

const fileStream = createStream("logfile", {
   path: "logs",
   maxFiles:3,
   interval: "1d",
   maxSize: "1M"
})


app.use(morgan("combined", {stream: fileStream}));


const upload = multer({dest: "./uploads"})
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "fileUploads/");
   },
   filename: (req,file,cb) => {
      console.log(file.mimetype)
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + Date.now() + ext)
   }
}
)
const uploadFiles = multer({
   storage: storage,
   limits: {fileSize: 5 * 1024 * 1024}
})

app.set("view engine", "ejs");
app.get("/api", (req,res) => res.render("index", {name: req.url}));

app.post("/api", uploadFiles.array("photos", 2), (req,res) => {
   console.log(req.file);
   console.log(req.body);
   console.log("the url is:", req.url);
   res.send("done");
});

app.post("/users", upload.single("photo"), (req,res) => {
   console.log(req.file);
   console.log(req.body);
   console.log("the url is:", req.url);
   res.send("done");
});

app.post("/apis", uploadFiles.fields([{name:"photos", maxCount:3},
   {name: "images", maxCount:2}]), (req,res) => {
      //console.log("file", req.file);
      console.log("field", req.files);
      console.log("field photos", req.files["photos"]);
      console.log("field images", req.files.images);
      console.log("url:", req.url);
      res.send("done");
}
)

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
   console.log("in the err middleware");
   res.send(err)
});

app.listen(3000, () => {
   console.log("server is listening on 3000")
});
