import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
