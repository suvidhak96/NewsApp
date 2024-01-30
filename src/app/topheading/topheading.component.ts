import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private api:NewsapiService) { }
  data:any;
  ngOnInit(): void {
  this.api.topHeading().subscribe((data)=>{
    // console.log(data)
    this.data=data.articles;
  })
  }


}
