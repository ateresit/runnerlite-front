import { Component, OnInit } from '@angular/core';
import { CabinetService } from 'src/app/services/cabinet.service';
import { dateToString } from 'src/app/helpers/date.helper';

@Component({
  selector: 'app-volunteer-last-history',
  templateUrl: './volunteer-last-history.component.html',
  styleUrls: ['./volunteer-last-history.component.scss']
})
export class VolunteerLastHistoryComponent implements OnInit {

  constructor(
    private service : CabinetService
  ) { }

  runningNumber?: number;
  runningDate?: string;
  teamsName?: string;
  positionName?: string;
  teamsId?: number;
  positionNameHistory: string[]  = [];

  ngOnInit(): void {
    this.service.getVolunteerLastHistory().subscribe(result => {
      this.runningNumber = result.runningNumber;
      this.runningDate = dateToString(result.runningDate);
      this.teamsName = result.teamsName;
      this.positionName = result.positionName;
      this.teamsId = result.teamsId;
      this.positionNameHistory = result.positionNameHistory;
    }, error => {
      console.log(error);
    })
  }

}
