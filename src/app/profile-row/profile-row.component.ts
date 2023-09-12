import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
  @Input() names : string = "Frederick";
  @Input() descriptions : string = "Macht gerne Locher";
  @Input() images : string = "assets/img/hamsters/pic2.jpg";
  
  @Input() canFollow = true;

  constructor(public fs: FriendService){}
}
