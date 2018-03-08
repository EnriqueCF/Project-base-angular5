import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Candidate } from '../models/candidate';

@Injectable()
export class PetitionsService {
  public url_get: string;
  public url_post: string;

  constructor(
    public _http: Http
  ) {
    this.url_get = GLOBAL.url_get;
    this.url_post = GLOBAL.url_post;
  }

  getPetition() {
    return this._http.get(this.url_get).map(response => response.json());
  }

  addPetition(item: Candidate) {
    return this._http.post(this.url_post, item)
      .map(response => response);
  }
  getUsers() {
    //let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.get('http://localhost:8080/gpp/api/users/')
      .map(response => response.json());
  }
}
