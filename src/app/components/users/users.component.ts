import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

})

export class UsersComponent implements OnInit {
  isgrid: boolean = false
  users: any[] = []

  ngAfterViewInit() {
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getAllUserData()
  }

  changeGrid(key: boolean) {
    this.isgrid = key

  }
  getAllUserData() {
    this.dataService.getUserData().subscribe((res: any) => {
      console.log(res)
      this.users = res

    }, (err) => {
      console.log(err)
    })
  }
}
