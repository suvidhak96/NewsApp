import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {
 
  entertainData:any=[];
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.entertainmentNews().subscribe((data)=>{
      this.entertainData=data.articles
    })
  }

}
