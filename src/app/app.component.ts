import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOninit() {
    debugger;
    window.addEventListener("message", this.messageHandler, false);
    window.postMessage("message","*");
  }

  messageHandler(event) {
    debugger;
  }
}
