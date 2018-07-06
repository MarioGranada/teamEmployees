import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  private countriesUrl = 'https://restcountries.eu/rest/v2';

  getAllCountries(): Observable<any> {
    return this.http.get(this.countriesUrl + '/all');
  }
}
