// const { array, myFunc } = require("./script");
// console.log(myFunc(array));

// http - Protocollar bilan ishlash uchun module.
// path - Pathlar bilan ishlash uchun module.

// ------------------- Operation System ------------------- //
// const os = require('os');
// console.log(os.networkInterfaces());

// const path = require("path");
// console.log(process.cwd() + "./index.js");  // Path 

// 1.
// ---------------------- File System ----------------------- //
// var fs = require("fs");

// function setFunc() {
//   fs.appendFile("newFile.js", "Hello content!", function (err) {
//     if (err) throw err;
//     console.log("Saved!");

//     setTimeout(() => {
//       fs.rename("newFile.js", "renamed.js", function (err) {
//         if (err) throw err;
//         console.log("File Renamed.");

//         setTimeout(() => {
//           fs.unlink("renamed.js", (err) => {
//             if (err) {
//               throw err;
//             }
//             console.log("Delete File successfully.");
//           });
//         }, 2000);
//       });
//     }, 2000);
//   });
// }
// console.log(setFunc());

// 2.
// const fs = require("fs");

// function setFunc() {
//   fs.appendFile("mynewfile.js", "Hello content!", function (err) {
//     if (err) throw err;
//     console.log("Saved!");

//     fs.copyFile("folder/copy.js", "mynewfile.js", (err) => {
//       if (err) throw err;
//       console.log("source.txt was copied to destination.txt");
//     });
//   });
// }
// console.log(setFunc());








