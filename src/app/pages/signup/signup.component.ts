import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SignupDto } from 'src/app/model/signup-dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupDto: SignupDto = new SignupDto('', '', '', '', '', '', '', '', '','');

  cityControl = new FormControl();
  cties: string[] = ['Москва', 'Волгоград', 'Ростов', 'Тамбов'];
  filteredCities: Observable<string[]> = this.cityControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value, this.cties))
  );

  teamContol = new FormControl();
  teams: string[] = ['Команда1', 'Команда2'];
  filterdTeams: Observable<string[]> = this.teamContol.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value, this.teams))
    
  );

  constructor() { }

  ngOnInit(): void {
    
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  save() {
    console.log(this.signupDto);
  }

}
