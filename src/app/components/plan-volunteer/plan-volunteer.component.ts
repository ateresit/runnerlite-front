import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlanVolunteerDto } from 'src/app/model/plan-volunteer-dto';
import { PlanVolunteerService } from 'src/app/services/plan.volunteer.service';
import { dateToString } from 'src/app/helpers/date.helper';
@Component({
  selector: 'app-plan-volunteer',
  templateUrl: './plan-volunteer.component.html',
  styleUrls: ['./plan-volunteer.component.scss']
})
export class PlanVolunteerComponent implements OnInit {

  constructor(
    private volunteerService: PlanVolunteerService
  ) { }

  displayedColumns: string[] = [
    'positionName',
    'positionRequired',
    'fullNameVolunteer',
    'buttons'
  ];
  
  volunteerList: PlanVolunteerDto[] = [];

  private subs!: Subscription;

  ngOnInit(): void {
    this.subs = this.volunteerService.runTableInfo$.subscribe(r => {
      this.teamsRunningCountId = r.teamsRunningCountId;
      this.statusVolunteer = r.statusVolunteer;
      this.refreshDataSource();
      
    })    
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  statusVolunteer: boolean = true;
  teamsRunningCountId!: number;

  currentRun: string;



  private refreshDataSource() {    
    this.volunteerService.getPlanVolunteer(this.teamsRunningCountId).subscribe(r => {
      this.volunteerList = r;
      if (this.volunteerList.length) {
        this.currentRun = `Забег №${this.volunteerList[0].runningNumber} Дата: ${dateToString(this.volunteerList[0].runningDate)}`;
      }
      
    }, error => {
      console.log(error);
    });
  }

  insertVolunteer(volunteersPosition: number) {    
    this.volunteerService.insertVolunteer(this.teamsRunningCountId, volunteersPosition).subscribe(r => {
      this.statusVolunteer = true;
      this.refreshDataSource();
      this.volunteerService.changeNeedRefresh(true);
    }, error => {
      console.log(error);
    });
  }
  
  deleteVolunteer(volunteersId: number) {    
    this.volunteerService.deleteVolunteer(volunteersId).subscribe(r => {
      this.statusVolunteer = false;
      this.refreshDataSource();
      this.volunteerService.changeNeedRefresh(true);
    }, error => {
      console.log(error);
    })
  }

}
