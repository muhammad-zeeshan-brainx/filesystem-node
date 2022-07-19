const fs = require("fs");

// fs.open("test.txt", "w+", (err, fd) => {
//   // fd is our file descriptor
// });

fs.stat("test.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats.isSymbolicLink()); // false
  console.log(stats.size);
});
