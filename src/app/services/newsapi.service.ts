import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  // news api
  newsApiUrl='https://newsapi.org/v2/top-headlines?country=in&apiKey=02fdeb7a4ab74ae192015a0a11b9a16a'

  // technology api
  techApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=02fdeb7a4ab74ae192015a0a11b9a16a'

  // business api
  businessApi='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=02fdeb7a4ab74ae192015a0a11b9a16a'

  // health api
  healthApi='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=02fdeb7a4ab74ae192015a0a11b9a16a'

  // Sports api
  sportsApi='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=02fdeb7a4ab74ae192015a0a11b9a16a'
   
  // science api
  scienceApi='https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=02fdeb7a4ab74ae192015a0a11b9a16a'
     
  // Entertainment api
  entertainmentApi='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=02fdeb7a4ab74ae192015a0a11b9a16a'
        
  // news method
  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl)
  }

  //technology method
  techNews():Observable<any>{
    return this.http.get(this.techApiUrl)
  }

  // business method
  businessNews():Observable<any>{
    return this.http.get(this.businessApi)
  }

  //health method
healthNews():Observable<any>{
  return this.http.get(this.healthApi)
}

  //Sports method
  sportsNews():Observable<any>{
    return this.http.get(this.sportsApi)
  }

    //science method
    scienceNews():Observable<any>{
      return this.http.get(this.scienceApi)
    }
    
    //entertainment method
    entertainmentNews():Observable<any>{
      return this.http.get(this.entertainmentApi)
    }

}
