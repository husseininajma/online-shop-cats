import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'my-first-angularApp';
  postTexts = [
    'Hallo, mein Name ist Markus! Ich bin hier, um neue Freunde zu treffen. Ich gebe gerne Löcher',
    'Hallo zusammen. Freut mich, dass ihr hier seid!!',
    'Hallo, mein Name ist Josephine. Ich bin 2 Jahre alt',
    'Ich esse gerne Kekse.'
  ];

  postPics =[
    'assets/img/hamsters/pic1.jpg',
    'assets/img/hamsters/pic2.jpg',
    'assets/img/hamsters/pic3.jpg',
    'assets/img/hamsters/pic4.jpg',
  ];

  
 

  like = 0;
}
