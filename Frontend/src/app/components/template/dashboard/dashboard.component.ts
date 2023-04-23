import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
imagesForSlider = [
    {path: '../../../../assets/img/Ultra.jpg'},
    {path: '../../../../assets/img/monstersofrock.jpg'},
    {path: '../../../../assets/img/mita.jpg'},
    {path: '../../../../assets/img/FOOPOSTER.jpg'}
];
}
