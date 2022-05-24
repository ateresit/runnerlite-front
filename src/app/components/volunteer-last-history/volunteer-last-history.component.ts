import { Component, Input, OnInit } from '@angular/core';

import { VolunteerLastHistoryDto } from 'src/app/model/volunteer-last-history-dto';

@Component({
  selector: 'app-volunteer-last-history',
  templateUrl: './volunteer-last-history.component.html',
  styleUrls: ['./volunteer-last-history.component.scss']
})
export class VolunteerLastHistoryComponent implements OnInit {

  @Input() source: VolunteerLastHistoryDto;

  constructor(    
  ) { }  

  ngOnInit(): void {    
  }

}
