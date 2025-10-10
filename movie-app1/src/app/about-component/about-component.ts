import { Component } from '@angular/core';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutComponent {
  appName:string='Movies Angel';
  version:number=1.0;
  author:string='Saksoft-Training/Priyanka';

}
