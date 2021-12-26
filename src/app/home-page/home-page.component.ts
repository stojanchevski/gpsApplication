import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  stars: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
  }
  countStar(star){
    this.selectedValue = star;
    console.log('Value of star', star);
  }

  onClickEvent(event:any){
    console.log(event.targe.value)
  }

}
