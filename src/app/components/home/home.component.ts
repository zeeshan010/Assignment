import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestBlogs:any[]=[]
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
    this.dataService.getPostData().subscribe((res:any)=>{
      this.latestBlogs = res


    },error=>{
      console.log(error)

    })
  }

}
