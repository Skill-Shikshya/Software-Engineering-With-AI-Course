import querystring from "querystring"

export const parseUrlEncodedStream = (req, _res, next) => {
  let rawData = "";

  // Collect incoming raw data chunks
  req.on("data", (chunk) => {
    console.log("data in chunk", chunk);
    //console.log("chunk to string", chunk.toString());
    //console.log("parse url encoded", querystring.parse(chunk.toString()));
    rawData += chunk;
  });

  // Once stream ends, parse the string and attach to req.body
  req.on("end", () => {
    req.body = querystring.parse(rawData);
    req.name = req.body.name;
    console.log("this is a middleware");
    next();
  });

  req.on("error", (err) => {
    next(err);
  });
};

