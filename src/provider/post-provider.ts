import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PostProvider {

  server: string = 'https://himsiappnaylavikasilvina.si2023.site/api_himsi/';
  upload: string = this.server + 'upload/';

  constructor(
    public http: HttpClient
  ) {}

  postData(body: any, file: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(

      this.server + file,

      JSON.stringify(body),

      { headers: headers }

    );

  }

  getData(file: string): Observable<any> {

    return this.http.get(

      this.server + file

    );

  }

  uploadData(body: FormData, file: string): Observable<any> {

    return this.http.post(

      this.server + file,

      body

    );

  }

}