// Un prompt como output
process.stdout.write("prompt > ");
const commands = require("./commands");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let parametros = data.toString().trim().split(" ");
  let cmd = parametros[0]; // Remueve la nueva línea
  let arg = parametros.slice(1);
  commands[cmd](arg);
});
