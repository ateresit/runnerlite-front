import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamWithDistrDto } from '../model/team-with-distr-dto';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(public http: HttpClient) { }

  public getByCityId(id: number): Observable<TeamWithDistrDto[]> {    
    return this.http.get<TeamWithDistrDto[]>('/api/v1/teams/filter/', {
      params: new HttpParams().set('city', id)
    });
  }
}
