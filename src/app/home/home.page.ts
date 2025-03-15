import { Component } from '@angular/core';
interface AuthorInfo{
  aName: string
  aBirth: number
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pageName = "Шебанов Вячеслав Викторович!"
  books = ["Шебанов", "Вячеслав", "Викторович"]
  authors: AuthorInfo[] = [
    {aName:"Шебанов", aBirth:2002},
    {aName:"Морозов", aBirth:2002},
  ]
  constructor() {}
  
  btnClick(){
    this.pageName = this.pageName + "!"
  }

  
}
