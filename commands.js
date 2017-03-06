var fs = require('fs');

module.exports = {
  pwd: function (fileName) {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt > ' )
  },
  date: function(fileName) {
    var today = new Date();
    var formattedDate = today.toDateString() + " " + today.toTimeString();
    process.stdout.write(formattedDate)
    process.stdout.write('\nprompt > ' )
  },
  ls: function(fileName) {
    fs.readdir('.', function(err, fileName) {
      if (err) {
        throw err;
      }
      fileName.forEach(function(file){
        process.stdout.write(file.toString() + '\n');
      })
      process.stdout.write('\nprompt > ' )
    })
  },
  echo: function(fileName) {
    process.stdout.write(fileName);
    process.stdout.write('\nprompt > ' )
  },
  cat: function(fileName) {
    fs.readFile(fileName, function(err, data) {
      if (err) {
        throw err;
      }
      process.stdout.write(data);
      process.stdout.write('\nprompt > ' )
    })
  },
  head: function(fileName) {
    fs.readFile(fileName, function(err, data){
      if (err) {
        throw err;
      }
      var dataArr = data.toString().split("\n");
      process.stdout.write(dataArr.slice(0, 9).join("\n"));
      process.stdout.write('\nprompt > ' )
    })
  }
}
