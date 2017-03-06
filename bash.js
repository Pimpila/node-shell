process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === 'pwd') {
    process.stdout.write(process.env.PWD);
  }
  if (cmd === 'date') {
    var today = new Date();
    var formattedDate = today.toDateString() + " " + today.toTimeString();
    process.stdout.write(formattedDate)
  }

  process.stdout.write('\nprompt > ');
});


