import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppSettings } from '../app.settings';
import { PlanVolunteerDto } from '../model/plan-volunteer-dto';
import { RunTableInfo } from '../model/run-table-info';

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

  private runTableInfo = new Subject<RunTableInfo>();

  public runTableInfo$ = this.runTableInfo.asObservable();

  public changeRunTableInfo (info : RunTableInfo) {
    this.runTableInfo.next(info);
  }

  private needRefresh = new Subject<boolean>();

  public needRefresh$ = this.needRefresh.asObservable();

  public changeNeedRefresh(nr : boolean) {
    this.needRefresh.next(nr);
  }

}
