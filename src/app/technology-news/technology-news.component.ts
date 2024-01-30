import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-technology-news',
  templateUrl: './technology-news.component.html',
  styleUrls: ['./technology-news.component.css'],
})
export class TechnologyNewsComponent implements OnInit {
  constructor(private api: NewsapiService) {}

  techData: any = [];

  ngOnInit(): void {
    this.api.techNews().subscribe((data) => {
      // console.log('tech is', data);
      this.techData = data.articles;
    });
  }
}
