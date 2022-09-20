import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public festival : {name : String, tables : number}[]
  public nbModify : number = 0;

  ngOnInit(): void {
    this.festival = [
      { name : "FJM2020", tables : 160 },
      { name : "FJM2018", tables : 80 },
      { name : "FJM2019", tables : 110 }
    ];
  }

  addFestival() : void {
    const fest = {name : "test", tables : 15};
    this.festival.push(fest);
  }

  modifyName() : void {
    this.nbModify ++
    this.festival[0].name =  "FJM2020" + "(" + this.nbModify + ")";
  }
}