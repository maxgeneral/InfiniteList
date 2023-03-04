import {Component, OnInit} from '@angular/core';
import {DogService} from "../../service/dog-service.service";
import {Dog} from "../../model/dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'InfiniteList';
  gridColumns = 5;
  page = 1;
  dogs: Dog[] = []

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService
      .getDogs(this.page)
      .subscribe((dogs: Dog[]) => {
        this.dogs = dogs;
      });
  }
  onScroll(): void {
    this.dogService
      .getDogs(++this.page)
      .subscribe((dogs: Dog[]) => {
        this.dogs.push(...dogs);
      });
  }
}
