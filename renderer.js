// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { exec } = require('child_process')

var query = document.querySelector.bind(document)

function download() {
	links = query('#links').value;
	console.log(links);
	exec('ls /', (err, stdout, stderr)=>{query('#output').innerText = stdout})
}

query('#btn').addEventListener('click', download)
