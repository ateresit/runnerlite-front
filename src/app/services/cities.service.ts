import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitiesDto } from '../model/cities-dto';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(public http: HttpClient) { }

  public findAll() {
    return this.http.get<CitiesDto[]>("/api/v1/cities/getAll");
  }

}
