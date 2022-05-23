import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlanVolunteerDto } from 'src/app/model/plan-volunteer-dto';
import { PlanVolunteerService } from 'src/app/services/plan.volunteer.service';

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
    this.subs = this.volunteerService.tRCId$.subscribe(ti => {
      this.refreshDataSource(ti);
    })    
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  teamsRunningCountId!: number;

  private refreshDataSource(_teamsRunningCountId: number) {
    this.teamsRunningCountId = _teamsRunningCountId;
    this.volunteerService.getPlanVolunteer(_teamsRunningCountId).subscribe(r => {
      this.volunteerList = r;
    }, error => {
      console.log(error);
    });
  }

  insertVolunteer(volunteersPosition: number) {    
    this.volunteerService.insertVolunteer(this.teamsRunningCountId, volunteersPosition).subscribe(r => {
      this.refreshDataSource(this.teamsRunningCountId);
    }, error => {
      console.log(error);
    });
  }
  
  deleteVolunteer(volunteersId: number) {    
    this.volunteerService.deleteVolunteer(volunteersId).subscribe(r => {
      this.refreshDataSource(this.teamsRunningCountId);
    }, error => {
      console.log(error);
    })
  }

}
