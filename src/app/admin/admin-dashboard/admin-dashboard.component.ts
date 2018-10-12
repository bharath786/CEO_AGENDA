import { Component, OnInit } from '@angular/core';
/*import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

declare var moment:any;*/
import 'rxjs/add/operator/map';
import * as jQuery from 'jquery';

//import { } from 'jquery-knob';
//import { } from 'bootstrap-datepicker';
//import { } from 'jqueryui';
import { } from 'daterangepicker';
//import { } from 'jquery.slimscroll';
import * as moment from 'moment';
import { Chart } from 'angular-highcharts';
// Variable in assets/js/scripts.js file
//declare var AdminLTE: any;


@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

    // linechart: morris.GridChart;
    // areaChart: morris.GridChart;
    // donutChart: morris.DonutChart;

    start_date: any;

    end_date: any;

    constructor() {}
    ngOnInit() {
        /* let start_date:any;
       
         let end_date:any;*/

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




        // this.areaChart = Morris.Area({
        //   element: 'revenue-chart',
        //   resize: true,
        //   data: [
        //     { y: '2011 Q1', item1: 2666, item2: 2666 },
        //     { y: '2011 Q2', item1: 2778, item2: 2294 },
        //     { y: '2011 Q3', item1: 4912, item2: 1969 },
        //     { y: '2011 Q4', item1: 3767, item2: 3597 },
        //     { y: '2012 Q1', item1: 6810, item2: 1914 },
        //     { y: '2012 Q2', item1: 5670, item2: 4293 },
        //     { y: '2012 Q3', item1: 4820, item2: 3795 },
        //     { y: '2012 Q4', item1: 15073, item2: 5967 },
        //     { y: '2013 Q1', item1: 10687, item2: 4460 },
        //     { y: '2013 Q2', item1: 8432, item2: 5713 }
        //   ],
        //   xkey: 'y',
        //   ykeys: ['item1', 'item2'],
        //   labels: ['Item 1', 'Item 2'],
        //   lineColors: ['#a0d0e0', '#3c8dbc'],
        //   hideHover: 'auto'
        // });

        // this.donutChart = Morris.Donut({
        //   element: 'sales-chart',
        //   resize: true,
        //   colors: ['#3c8dbc', '#f56954', '#00a65a'],
        //   data: [
        //     { label: 'Download Sales', value: 12 },
        //     { label: 'In-Store Sales', value: 30 },
        //     { label: 'Mail-Order Sales', value: 20 }
        //   ],
        // });

    }


    summary = new Chart({
        yAxis: {
            title: {
                text: null
            }
        },

        title: {
            text: 'Summary',
            align: 'left',
            x: 65,
            y: 20
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

    growthchart = new Chart({

        chart: {
            type: 'bar'
        },
        title: {
            text: 'Growth',
            align: 'left',
            x: 65,
            y: 20
        },

        xAxis: {
            categories: ['ANDROID', 'PHP', '.NET', 'IOS'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
           
               
                title: {
                    text: 'Projects',
                    align: 'high'
            },

        },
        tooltip: {
            valueSuffix: ' projects'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },

        },

        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 2002',
            data: [107, 31, 65, 23]
        }, {
            name: 'Year 2007',
            data: [133, 156, 97, 48]
        }, {
            name: 'Year 2012',
            data: [81, 81, 71, 77]
        }, {
            name: 'Year 2017',
            data: [126, 101, 44, 38]
        }]
    });

    activeleads = new Chart({
        title: {
            text: 'Active Leads',
            align: 'left',
            x: 70,
            y: 30
        },
    
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '{point.x}<br />',
            pointFormat: 'Active Leads: <b>{point.y}</b>'
        },
        xAxis: {
            categories: ['Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'Jun-18', 'Jul-18', 'Aug-18', 'Sep-18', 'Oct-18', 'Nov-18', 'Dec-18'],
            title: {
                text: 'Frequency'
            }
        },
        yAxis: {
            title: {
                text: 'Leads'
            }
        },
        series: [{
            name: 'Active Leads',
            data: [15, 35, 25, 66, 33, 80, 59, 29, 42, 59, 45, 62],
            
        }]
    });

    prospectschart = new Chart({
        yAxis: {
            title: {
                text: null
            }
        },

        title: {
            text: 'Prospects',
            align: 'left',
            x: 65,
            y: 20
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

    })
}
