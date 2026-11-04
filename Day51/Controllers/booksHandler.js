const BookHandler = async (req,res) => { 
   //console.log("the books", books);
   console.log("the req on url",req.url);
   console.log("the method is:", req.method);
   console.log("the data is: ", req.body);
   console.log("the name is:", req.name);
   res.send("sorry I did not reveive the data");
})

export {BookHandler}
