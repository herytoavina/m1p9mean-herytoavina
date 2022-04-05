import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { PlatsService } from './../../services/plats.service';

@Component({
  selector: 'app-plats-list',
  templateUrl: './plats-list.component.html',
  styleUrls: ['./plats-list.component.css']
})
export class PlatsListComponent implements OnInit {

  countPlat?: number;
  plats?: any;
  currentPlat:Plat = {};
  currentIndex = -1;
  title = '';
  constructor(private platService: PlatsService) { }
  ngOnInit(): void {
    this.retrievePlatPlats();
  }
  retrievePlatPlats(): void {
    this.platService.getAll()
      .subscribe({
        next: (data) => {
          this.countPlat = data.count;
          this.plats = data.plats;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrievePlatPlats();
    this.currentPlat = {};
    this.currentIndex = -1;
  }
  setActivePlat(plat : Plat, index: number): void {
    this.currentPlat = plat;
    this.currentIndex = index;
  }
  removeAllPlatPlats(): void {
    this.platService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
}
