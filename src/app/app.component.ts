import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

	clicked(event) {
		let paths = ipcRenderer.sendSync('choose-outdir');
		console.log(paths);		
	}
}
