import { Component, OnInit } from '@angular/core';
import { AchievementsDto } from 'src/app/model/achievements-dto';
import { CabinetService } from 'src/app/services/cabinet.service';
import { dateToString, secondsToTimeString } from 'src/app/helpers/date.helper';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-achievements-history',
  templateUrl: './achievements-history.component.html',
  styleUrls: ['./achievements-history.component.scss']
})
export class AchievementsHistoryComponent implements OnInit {

  constructor(
    private service : CabinetService
  ) { }

  source!: Observable<AchievementsDto[]>;

  ngOnInit(): void {    
   this.source = this.service.getAchievements();
  }

  dateToString = dateToString;
    
  secondsToTimeString = secondsToTimeString;

}
