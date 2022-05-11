import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-cabinet-runner',
  templateUrl: './cabinet-runner.component.html',
  styleUrls: ['./cabinet-runner.component.scss']
})
export class CabinetRunnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
