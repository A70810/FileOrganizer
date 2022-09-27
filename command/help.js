//implemented help
function helpfn()
{
	console.log
	   (`
		List Of All Command
		node main.js tree "directoryPath"
		node main.js organize "directroyPath"
		node main.js help
		`);
}

module.exports = {
	helpKey: helpfn
}