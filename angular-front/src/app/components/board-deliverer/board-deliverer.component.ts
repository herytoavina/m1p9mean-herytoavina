import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-deliverer',
  templateUrl: './board-deliverer.component.html',
  styleUrls: ['./board-deliverer.component.css']
})
export class BoardDelivererComponent implements OnInit {

  content?: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getDelivererBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
