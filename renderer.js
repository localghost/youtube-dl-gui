// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { exec } = require('child_process')

const { ipcRenderer } = require('electron')

const query = document.querySelector.bind(document)

const quote = (x) => {
	x = x.trim();
	return x != "" ? '"' + x + '"' : x;
};

const infoBox = query('#info')
function info(message) {
	infoBox.innerHTML = message;
}

function getOutputDir() {
	paths = ipcRenderer.sendSync('choose-outdir')
	return paths.length != 0 ? paths[0] : null;
}

function download() {
	links = query('#links').value.trim()
	if (links == '')
		return;
	links = links.split(/\s+/).map(quote).join(' ')
	outputDir = getOutputDir()
	if (outputDir == null) {
		return;
	}
	template = `${outputDir}/%(title)s.%(ext)s`
	info("Downloading, please wait...");
	query('#btn').disabled = true;
	exec(
		`./youtube-dl -o "${template}" ${links}`,
		(err, stdout, stderr) => {
			query('#btn').disabled = false;
			if (err) {
				info(`Error happened during download [${err}]`);
				return;
			}
			info("Files downloaded!")
		}
	);
}

query('#btn').addEventListener('click', download)
