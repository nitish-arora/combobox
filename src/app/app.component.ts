import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldLoad: boolean = false;
  ngOninit() {
    window.parent.postMessage({"isChildLoaded": true},"*");
    const domains = ["http://localhost:3000"];
    window.addEventListener("message",  (event) => {
      if(!domains.includes(event.origin)) return;
      const { action, key, value } = event.data;
      if (action == "save") {
        localStorage.setItem(key, value);
        this.shouldLoad = true;
      }
      alert("got message");
    });
    // debugger;
    // console.log(localStorage.getItem("abc"));
    // alert(localStorage.getItem("abc"));
    // window.addEventListener("message", this.messageHandler, false);
    // window.postMessage("message","*");
  }

  messageHandler(event) {
    debugger;
  }
}
