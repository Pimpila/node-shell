// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
//   if (cmd === 'pwd') {
//     process.stdout.write(process.env.PWD);
//   }
//   process.stdout.write('\nprompt > ');
// });
 
// process.stdin.on('data', function (data) {
//   if (cmd === 'date') {
//     var today = new Date();
//     var formattedDate = today.toDateString() + " " + today.toTimeString();
//     process.stdout.write(formattedDate)
//   }
// });

module.exports = {
  pwd:function () {
    process.stdout.write(process.env.PWD);
  },
  date:function() {
    var today = new Date();
    var formattedDate = today.toDateString() + " " + today.toTimeString();
    process.stdout.write(formattedDate)
  }
}