var fs = require('fs');

module.exports = {
  pwd: function () {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt >' )
  },
  date: function() {
    var today = new Date();
    var formattedDate = today.toDateString() + " " + today.toTimeString();
    process.stdout.write(formattedDate)
    process.stdout.write('\nprompt >' )
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) {
        throw err;
      }
      files.forEach(function(file){
        process.stdout.write(file.toString() + '\n');
      })
      process.stdout.write('\nprompt >' )
    })
  },
  echo : function(input) {
    process.stdout.write(input);
    process.stdout.write('\nprompt >' )
  }
}
