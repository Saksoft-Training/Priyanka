import { Component } from '@angular/core';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
 styleUrls: ['../../styles.scss']
})
export class AboutComponent {
  //#region Properties
  /**
   * @param appName Name of the application
   * @param version Version of the application
   * @param author Author of the application
   */
  appName: string = 'Movies Angel';
  version: number = 1.0;
  author: string = 'Saksoft-Training/Priyanka';
  //#endregion
}
