import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {

  healthData:any=[];
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.healthNews().subscribe((data)=>{
      this.healthData=data.articles
    })
  }

}
