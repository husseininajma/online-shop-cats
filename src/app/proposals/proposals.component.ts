import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
  
  names = [
    'Marius', 
    'Fransiska', 
    'Josephine', 
    'Patrick'];

  texts = [
    '2 Jahre alt', 
    'gibt gerne locher', 
    'esst gerne kekse'
  ];

  images =[
    'assets/img/hamsters/pic2.jpg', 
    'assets/img/hamsters/pic3.jpg', 
    'assets/img/hamsters/pic4.jpg'
  ]

 
}
