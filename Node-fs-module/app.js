const fs = require('fs');


// creating file using apend
// fs.appendFile("file1.txt","this is fie 1",function(err){
//     if(err) throw err;
//     console.log("file created")
// });


// // creating empty file using open
// fs.open("./file2.txt","w",function(err){
//     if(err) throw err;
//     console.log("file opened")
// })


// // writing in file

fs.writeFile("file2.txt","hello , this is file 2.",function(err){
    if(err) throw err;
    console.log("data saved");
})

// // fs.unlink() used for  delete a file.