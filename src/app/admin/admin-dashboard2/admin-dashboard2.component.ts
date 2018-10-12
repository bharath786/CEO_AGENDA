import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;
import { Chart } from 'angular-highcharts';
import 'rxjs/add/operator/map';
import * as jQuery from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-dashboard2',
  templateUrl: './admin-dashboard2.component.html',
  styleUrls: ['./admin-dashboard2.component.css']
})
export class AdminDashboard2Component implements OnInit {
  start_date: any;

  end_date: any;
  constructor() { }

  ngOnInit() {
     // Actualiza la barra latera y el footer
    AdminLTE.init();
    
    this.start_date = moment().subtract(29, 'days');

  this.end_date = moment();




  jQuery('.daterange').daterangepicker({
      ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      opens: 'left',
      startDate: moment().subtract(29, 'days'),
      endDate: moment()
  }, function (x: any, y: any) {

      console.log(x);
      this.start_date = x;
      this.end_date = y;
      // window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
  });
  }

}
