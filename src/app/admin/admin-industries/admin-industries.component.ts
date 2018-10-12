import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import * as jQuery from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-industries',
  templateUrl: './admin-industries.component.html',
  styleUrls: ['./admin-industries.component.css']
})
export class AdminIndustriesComponent implements OnInit {
  start_date: any;

  end_date: any;
  constructor() { }

  ngOnInit() {
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
