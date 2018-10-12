import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import 'rxjs/add/operator/map';
import * as jQuery from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-control-infrastructure',
  templateUrl: './admin-control-infrastructure.component.html',
  styleUrls: ['./admin-control-infrastructure.component.css']
})
export class AdminControlInfrastructureComponent implements OnInit {
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

  
  sitevisits = new Chart({
    yAxis: {
        title: {
            text: null
        }
    },

    title: {
        text: null
    },
    chart: {
        type: 'area'
    },
    credits: {
        enabled: false
    },
    tooltip: {
        pointFormat: ' <b>{point.y}</b> Visits'
    },
    xAxis: {
        categories: ['02/2013', '03/2013', '04/2013', '05/2013', '06/2013', '07/2013', '08/2013', '09/2013', '10/2013'],

    },
    legend: {
        enabled: false
    },
    series: [{

        data: [1500, 2500, 1700, 800, 1500, 2350, 1500, 1300, 4600],
        color: '#e49f9f'
    }]
});


revenuechart = new Chart({
  yAxis: {
      title: {
          text: null
      }
  },

  title: {
      text: null
  },
  chart: {
      type: 'area'
  },
  credits: {
      enabled: false
  },
  tooltip: {
      pointFormat: ' <b>{point.y}</b> M$'
  },
  xAxis: {
      categories: ['DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],

  },
  legend: {
      enabled: false
  },
  series: [{

      data: [300, 600, 1100, 1200, 860, 1200, 1450, 1800, 1200, 600],
      color: '#8bc6e9'
  }]

});
}
