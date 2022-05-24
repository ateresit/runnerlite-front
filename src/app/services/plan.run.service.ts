import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { PlanRunDto } from '../model/plan-run-dto';

const URL = AppSettings.API_ENDPOINT + 'planRun/';

@Injectable({
  providedIn: 'root'
})

export class PlanRunService {  

  constructor(public http: HttpClient) { }

  public getPlanRun(): Observable<PlanRunDto[]> {
    return this.http.get<PlanRunDto[]>(URL);
  }

  public insertRunner(teamsRunningCountId: number) : Observable<any> {
    return this.http.post(URL + teamsRunningCountId, {});
  }

  public deleteRunner(runnerCountId: number) : Observable<any> {
    return this.http.delete(URL + runnerCountId);
  }

}
