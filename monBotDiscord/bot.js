const Discord = require("discord.js");
const http = require("http");

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'quoi') {
		msg.reply('feur');
	}
});

client.login('NDAyMzk4OTA3NjQyMTUwOTEy.DT4P-A.MIrZRtru84K_eH4xOBavQpi-ntI');

var server = http.createServer(function (req, res) {
	res.writeHead(200);
	res.end('Salut tout le monde!');
});
server.listen(8080);

//Ajoute une ligne au log
function addLog(utilisateur, pseudoUtilisateur, message) {
	//Ligne à écrite dans le log
	var logTxt = utilisateur + ' Alias : ' + pseudoUtilisateur + ' a ecrit le ' + new Date() + ' : ' + message + "\n"
	//Vérification que le fichier de log existe 
	if (fs.existsSync(appDir + '/log.txt')) {
		//ajoute au log
		fs.appendFileSync(appDir + '/log.txt', logTxt);
	} else {
		//Créer le log
		fs.writeFileSync(appDir + '/log.txt', logTxt)
	}
}
	