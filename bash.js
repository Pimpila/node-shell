var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
	var input = data.toString().trim().split(" ");
	var cmd = input[0];
	var args = input.slice(1).join(" ");
	commands[cmd](args);

})
