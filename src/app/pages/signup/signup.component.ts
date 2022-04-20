import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CitiesDto } from 'src/app/model/cities-dto';
import { SignupDto } from 'src/app/model/signup-dto';
import { TeamDto } from 'src/app/model/team-dto';
import { CitiesService } from 'src/app/services/cities.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private citiesService: CitiesService, private teamsService: TeamsService) { }

  signupDto: SignupDto = new SignupDto('', '', '', '', '', '', '', '', '','');

  cityControl = new FormControl();
  cities: CitiesDto[] = [];
  filteredCities: Observable<CitiesDto[]> = this.cityControl.valueChanges.pipe(
    startWith(''),
    map(value => (typeof value === 'string' ? value : value.name)),
    map(value => this._filterCities(value))
  );
  private _filterCities(value: string) : CitiesDto[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.name.toLowerCase().includes(filterValue));
  }
  displayCity(city: CitiesDto) {
    return city && city.name ? city.name : '';
  }

  teamsList: TeamDto[] = [];
  changeCity(e: any) {
    console.log(e.option.value.id);    
    this.teamsService.getByCityId(e.option.value.id).subscribe(t => {
        console.log(t);
        this.teamsList = t;
      }, error => {
        console.log(error);
      }
    );
  }

    

  ngOnInit(): void {
    this.citiesService.findAll().subscribe(c => {
      this.cities = c;
    }, error => {
      console.log(error);
    });    
  }

  

  save() {
    console.log(this.signupDto);
  }

}
