import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  blogs: any[] = []

  ngOnInit(): void {
    this.getdata()
  }
  seeAllData(item: any, key: boolean) {
    let objIndex = this.blogs.findIndex((obj => obj.id == item.id));
    this.blogs[objIndex].seeless = key
  }
  getdata() {
    this.dataService.getPostData().subscribe((res: any) => {
      this.blogs = res


    }, error => {
      console.log(error)

    })
  }
}
