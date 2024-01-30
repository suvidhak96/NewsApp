import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';


@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {
 sportsData:any=[];
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.sportsNews().subscribe((data)=>{
      this.sportsData=data.articles
    })
  }

}
