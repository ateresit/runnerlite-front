import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppSettings } from '../app.settings';
import { PlanVolunteerDto } from '../model/plan-volunteer-dto';

const URL = AppSettings.API_ENDPOINT + 'planVolunteer/';

@Injectable({
  providedIn: 'root'
})
export class PlanVolunteerService { 

  constructor(public http: HttpClient) { }

  public getPlanVolunteer(teamsRunningCountId: number) : Observable<PlanVolunteerDto[]> {
    return this.http.get<PlanVolunteerDto[]>(URL + teamsRunningCountId);
  }

  public insertVolunteer(teamsRunningCountId: number, volunteersPosition: number): Observable<any> {
    return this.http.post(URL, {
      teamsRunningCountId : teamsRunningCountId,
      volunteersPosition : volunteersPosition
    });
  }

  public deleteVolunteer(volunteersId: number): Observable<any> {
    return this.http.delete(URL + volunteersId);
  }

  public tRCId$ = new Subject<number>();

  public changeTeamsRunningCountId(teamsRunningCountId: number) {
    this.tRCId$.next(teamsRunningCountId);
  }

}
