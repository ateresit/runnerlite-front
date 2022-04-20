import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamDto } from '../model/team-dto';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(public http: HttpClient) { }

  public getByCityId(id: number) {
    return this.http.get<TeamDto[]>(`/api/v1/teams/getByCityId/${id}/id`);
  }
}
