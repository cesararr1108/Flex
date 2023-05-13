import { Component } from '@angular/core';
import { CargaScriptsService } from './services/carga-scripts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ePlus';

  constructor(private service:CargaScriptsService){

    service.carga([
    'vendor/apexcharts/apexcharts.min',
    'vendor/bootstrap/js/bootstrap.bundle.min',
    //'vendor/chart.js/chart.umd',
    'vendor/echarts/echarts.min',
    'vendor/quill/quill.min',
    'vendor/simple-datatables/simple-datatables',

    'vendor/php-email-form/validate',
    'js/main'
    ]);

  }
}
