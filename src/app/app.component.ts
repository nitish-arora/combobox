import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOninit() {
    debugger;
    console.log(localStorage.getItem("abc"));
    alert(localStorage.getItem("abc"));
    window.addEventListener("message", this.messageHandler, false);
    window.postMessage("message","*");
  }

  messageHandler(event) {
    debugger;
  }
}
