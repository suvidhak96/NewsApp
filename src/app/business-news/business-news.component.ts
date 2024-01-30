import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  businessData:any=[];
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.businessNews().subscribe((data)=>{
      this.businessData=data.articles
      //console.log(data)
    })
  }

}
