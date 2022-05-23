import { Component, OnInit } from '@angular/core';
import { AchievementsDto } from 'src/app/model/achievements-dto';
import { CabinetService } from 'src/app/services/cabinet.service';
import { dateToString, secondsToTimeString } from 'src/app/helpers/date.helper';


@Component({
  selector: 'app-achievements-history',
  templateUrl: './achievements-history.component.html',
  styleUrls: ['./achievements-history.component.scss']
})
export class AchievementsHistoryComponent implements OnInit {

  list: AchievementsDto[] = [];

  constructor(
    private service : CabinetService
  ) { }

  ngOnInit(): void {
    this.service.getAchievements().subscribe(result => {
      this.list = result;
    }, error => {
      console.log(error);
    });
  }

  dateToString = dateToString;
    
  secondsToTimeString = secondsToTimeString;

}
