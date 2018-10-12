import { Component, OnInit } from '@angular/core';
import { TreeModelSettings, TreeModel } from 'ng2-tree';
import { Chart } from 'angular-highcharts';
import 'rxjs/add/operator/map';
import * as jQuery from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-marketing-highlights',
  templateUrl: './marketing-highlights.component.html',
  styleUrls: ['./marketing-highlights.component.css']
})
export class MarketingHighlightsComponent implements OnInit {
mainvalue: any ='Summary';
start_date: any;

end_date: any;
handleSelected1(e){

  this.mainvalue = e['value'];
  
  console.log(this.mainvalue);
};
  chart = new Chart({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },

    credits: {
        enabled: false
    },
    title: {
        text: 'Marketing'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Marketing',
        //colorByPoint: true,
        data: [{
            name: 'Business Development',
            y: 61.41,
            //sliced: true,
            //selected: true
        }, {
            name: 'Reputation',
            y: 11.84
        }, {
            name: 'Coverage',
            y: 10.85
        }
        ]
    }]
});

prospects = new Chart({
    title: {
        text: 'Prospects'
    },

    credits: {
        enabled: false
    },
    tooltip: {
        headerFormat: '{point.x}<br />',
        pointFormat: 'Prospects: <b>{point.y}</b>'
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
        name: 'Prospects',
        data: [20, 45, 35, 74, 42, 90, 69, 39, 52, 69, 55, 72],
        
    }]
});


activeleads = new Chart({
    title: {
        text: 'Active Leads'
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

public tree: TreeModel = {
    value: 'Root',
    settings: this.summarysettings(),
    children: [
        {
            value: 'Summary',
            settings: this.summarysettings(),
        },
        {
            value: 'Business Development',
            settings: this.foldersettings(),
            children: [
                {
                    value: 'Prospects',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Active Leads',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Future Leads',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Parallel Projects',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Conversion Ratio',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Wins',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Losses',
                    settings: this.summarysettings(),
                }
            
            ]
        },
        {
            value: 'Reputation',
            settings: this.foldersettings(),
            children: [
                {
                    value: 'Glassdoor Review',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Google Review',
                    settings: this.summarysettings()
                }]
        },
        {
            value: 'Coverage',
            settings: this.foldersettings(),
            children: [
                {
                    value: 'Voice',
                    settings: this.summarysettings(),
                },
                {
                    value: 'Social',
                    settings: this.summarysettings()
                },
                {
                    value: 'Mail',
                    settings: this.summarysettings(),
                } 
            
            ]
        
        },
        {
            value: 'Exceptions',
            settings: this.summarysettings(),
        }
    ]
};



private summarysettings(): TreeModelSettings {
    return {

        'rightMenu': false,
        'cssClasses': {
            'expanded': 'fa fa-minus-square-o fa-lg',
            'collapsed': 'fa fa-plus-square-o fa-lg',
            'leaf': 'fa fa-lg',
            'empty': 'fa fa-plus-square-o disabled'
        },
        'templates': {
            'node': '<i class="fa fa-file  greencolor fa-lg"></i>',
            'leaf': '<i class="fa fa-file  greencolor fa-lg"></i>',
            'leftMenu': '<i class="fa fa-navicon fa-lg"></i>',

        }
        // 'menuItems': [
        //   { action: NodeMenuItemAction.Custom, name: 'Update' },
        //   { action: NodeMenuItemAction.Custom, name: 'Delete' }
        // ]
    };
}


private foldersettings(): TreeModelSettings {
return {
  'cssClasses': {
    'expanded': 'fa fa-minus-square-o fa-lg',
    'collapsed': 'fa fa-plus-square-o fa-lg',
    'leaf': 'fa fa-lg',
    'empty': 'fa fa-plus-square-o disabled'
  },
  'templates': {
    'node': '<i class="fa fa-folder lightbrowmncolor fa-lg"></i>',
    'leaf': '<i class="fa fa-folder lightbrowmncolor fa-lg"></i>',
    'leftMenu': '<i class="fa fa-navicon lightbrowmncolor fa-lg"></i>'
  }
  
};
}

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
