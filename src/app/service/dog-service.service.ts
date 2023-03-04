
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dog } from '../model/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  #limit: number = 5;

  //constructor(private http: HttpClient) { } //Если мы захотим использовать загрузку по api объектов, http нам нужен)
  constructor() { }

  getDogs(page: number): Observable<Dog[]> {
    return of(Array.from(Array(page < 10? this.#limit:0).keys()).map(() =>
    {let dog: Dog =
      {
        title: 'Shiba Inu',
        subtitle:'Dog Breed',
        image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description:''};
      return dog;}));

    /*
    return this.http.get(
      `https://url get collection of dogs`
    ) as Observable<Dog[]>;
    */

  }
}
