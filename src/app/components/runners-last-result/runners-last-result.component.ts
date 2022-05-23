import { Component, OnInit } from '@angular/core';
import { CabinetService } from 'src/app/services/cabinet.service';
import { dateToString, secondsToTimeString } from 'src/app/helpers/date.helper';
import { Router } from '@angular/router';
import { LOGIN_URL } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-runners-last-result',
  templateUrl: './runners-last-result.component.html',
  styleUrls: ['./runners-last-result.component.scss']
})
export class RunnersLastResultComponent implements OnInit {

  runningNumber?:number;
  runningDate?: string;
  teamsName?: string;
  result?: string;
  finishPlace?: number;
  teamsId?: number;

  constructor(
    private service : CabinetService,
    private router : Router,
    private auth : AuthService 
  ) { }

  ngOnInit(): void {    
    this.service.getRunnersLastResult().subscribe(result => {
      this.runningNumber = result.runningNumber;      
      this.runningDate = dateToString(result.runningDate);
      this.teamsName = result.teamsName;
      this.result = secondsToTimeString(result.result);
      this.finishPlace = result.finishPlace;
      this.teamsId = result.teamsId
    }, error => {
      console.log(error);
      if (error.status == 401) {
        this.auth.logout();
        this.router.navigateByUrl(LOGIN_URL);        
      }
    });
  }

}
