import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { VolunteerLastHistoryDto } from 'src/app/model/volunteer-last-history-dto';
import { CabinetService } from 'src/app/services/cabinet.service';

@Component({
  selector: 'app-cabinet-runner',
  templateUrl: './cabinet-runner.component.html',
  styleUrls: ['./cabinet-runner.component.scss']
})
export class CabinetRunnerComponent implements OnInit {

  constructor(
    private service: CabinetService
  ) { }

  volunteerHistoryDataSource: Observable<VolunteerLastHistoryDto>;

  ngOnInit(): void {
    this.volunteerHistoryDataSource = this.service.getVolunteerLastHistory();
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      date = new Date(date);
      if (date.getDate() === 23 || date.getDate() === 30) {
        return 'special-date';
      }
      return '';
    };
  }

}
