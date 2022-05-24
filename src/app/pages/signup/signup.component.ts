import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ConfirmedValidator } from 'src/app/helpers/confirmed.validator';
import { CitiesDto } from 'src/app/model/cities-dto';
import { SignupDto } from 'src/app/model/signup-dto';

import { TeamWithDistrDto } from 'src/app/model/team-with-distr-dto';
import { AuthService } from 'src/app/services/auth.service';
import { CitiesService } from 'src/app/services/cities.service';
import { TeamsService } from 'src/app/services/teams.service';
import { LOGIN_URL } from '../login/login.component';

export const SIGNUP_URL = 'signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  cities: CitiesDto[] = [];
  filteredCities!: Observable<CitiesDto[]>;
  teamsList: TeamWithDistrDto[] = [];

  constructor(    
    private formBuilder: FormBuilder,
    private citiesService: CitiesService,
    private teamsService: TeamsService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.citiesService.findAll().subscribe(c => {
      this.cities = c;
    }, error => {
      console.log(error);
    });
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      nickName: [],
      city: ['', [
        Validators.required
      ]],
      team: ['', [
        Validators.required
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      birthday: ['', [
        Validators.required
      ]],
      sex: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      rePass: ['', [
        Validators.required
      ]]
    }, {
      validator: ConfirmedValidator('password', 'rePass')
    });
    this.filteredCities = this.signupForm.controls['city'].valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(value => this.filterCities(value))
    );
  }

  filterCities(value: string): CitiesDto[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.name.toLowerCase().includes(filterValue));
  }

  displayCity(city: CitiesDto) {
    return city && city.name ? city.name : '';
  }

  changeCity(e: any) {
    this.teamsService.getByCityId(e.option.value.id).subscribe(t => {      
      this.teamsList = t;
      this.signupForm.controls['team'].setValue('');
    }, error => {
      console.log(error);
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.signupForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const controls = this.signupForm.controls;
    /** Проверяем форму на валидность */
    if (this.signupForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      /** Прерываем выполнение метода*/
      return;
    }    
    let signup = new SignupDto(
      0,
      this.signupForm.value.email,
      this.signupForm.value.fullName,
      this.signupForm.value.password,
      this.signupForm.value.nickName,
      this.signupForm.value.phone,
      true,
      false,
      this.signupForm.value.team.id,
      this.signupForm.value.birthday,
      this.signupForm.value.sex
    );
    this.authService.signUp(signup).subscribe(r => {
      this.router.navigateByUrl(LOGIN_URL);
    }, error => {
      if (error.error.includes(this.signupForm.value.email)) {
        this.signupForm.controls['email'].setErrors({notUnique: true});
      }
      if (error.error.includes(this.signupForm.value.nickName)) {
        this.signupForm.controls['nickName'].setErrors({notUnique: true});
      }
      console.log(error);
    });    
  }

}
