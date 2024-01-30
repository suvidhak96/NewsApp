import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent implements OnInit {

  scienceData:any=[];
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.scienceNews().subscribe((data)=>{
      this.scienceData=data.articles;
    })
  }

}
