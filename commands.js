const fs = require("fs");
const request = require("request");

function pwd() {
  let ruta = process.cwd();
  process.stdout.write(ruta + "\n");
  process.stdout.write("prompt > ");
}
function date() {
  let date = Date();
  process.stdout.write(date + "\n");
  process.stdout.write("prompt > ");
}
function ls() {
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
  });
}
function echo(arg) {
  let resultado = "";
  arg.forEach((arg) => {
    if (process.env[arg.slice(1)]) {
      resultado += process.env[arg.slice(1) + " "];
    } else {
      resultado += arg + " ";
    }
    process.stdout.write(resultado + "\n");
    process.stdout.write("prompt > ");
  });
}

function cat(arg) {
  fs.readFile(`./${arg}`, (err, data) => {
    if (err) throw err;
    process.stdout.write(data + "\n");
    process.stdout.write("prompt > ");
  });
}

function head(arg, num = 5) {
  fs.readFile(`./${arg}`, (err, data) => {
    if (err) throw err;
    const lines = data.toString().split("\n").slice(0, num).join("\n");
    process.stdout.write(lines + "\n");
    process.stdout.write("prompt > ");
  });
}

function tail(arg, num = 5) {
  fs.readFile(`./${arg}`, (err, data) => {
    if (err) throw err;
    const lines = data.toString().split("\n").slice(-num).join("\n");
    process.stdout.write(lines + "\n");
    process.stdout.write("prompt > ");
  });
}

function sort(arg) {
  fs.readFile(`./${arg}`, (err, data) => {
    if (err) throw err;
    const sorting = data.toString().split("\n").sort().join("\n");
    process.stdout.write(sorting + "\n");
    process.stdout.write("prompt > ");
  });
}

function wc(arg) {
  fs.readFile(`./${arg}`, (err, data) => {
    if (err) throw err;
    const contador = data.toString().split("\n").length;
    process.stdout.write("La cantidad de lineas son: " + contador + "\n");
    process.stdout.write("prompt > ");
  });
}

function uniq(arg) {
  fs.readFile(`./${arg}`, (err, data) => {
    if (err) throw err;
    const contenido = data.toString().split("\n");
    const contenidoUnico = Array.from(new Set(contenido));
    const contenidoUniq = contenidoUnico.join("\n");
    process.stdout.write(contenidoUniq + "\n");
    process.stdout.write("prompt > ");
  });
}

function curl(arg) {
  request(`${arg}`, (err, response, body) => {
    console.log(body);
    process.stdout.write("prompt > ");
  });
}

module.exports = { pwd, date, ls, echo, cat, head, tail, sort, wc, uniq, curl };
