const fs = require("fs");

// fs.open("test.txt", "w+", (err, fd) => {
//   // fd is our file descriptor
// });

// fs.stat("test.txt", (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(stats.isFile()); // true
//   console.log(stats.isDirectory()); // false
//   console.log(stats.isSymbolicLink()); // false
//   console.log(stats.size);
// });

//////////------------FilePaths---------------------
// const path = require("path");
// const notes = "/users/zeeshan/Training/node/index.js";

// console.log(path.dirname(notes));
// console.log(path.basename(notes));
// console.log(path.extname(notes));
// console.log(path.basename(notes, path.extname(notes)));

// const name = "zeeshan";
// console.log(path.join(`/users/${name}/Training/node/index.js`));

// console.log(path.resolve("test.txt"));

// path.resolve("tmp", "joe.txt"); // '/Users/joe/tmp/joe.txt' if run from my home folder

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const content = "Some content!";

fs.writeFile("test.txt", content, { flag: "a+" }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file written successfully");
});
