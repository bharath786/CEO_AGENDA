import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeModel, NodeMenuItemAction, TreeModelSettings } from 'ng2-tree';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor() { }
  
  @ViewChild('addgroupmodal') public addgroupModal: ModalDirective;
  @ViewChild('adddimensionmodal') public adddimensionmodal: ModalDirective;
  @ViewChild('addkramodal') public addkramodal: ModalDirective;
  @ViewChild('addkpimodal') public addkpimodal: ModalDirective;
  @ViewChild('updategroupmodal') public updategroupmodal: ModalDirective;
  @ViewChild('updatedimensionmodal') public updatedimensionmodal: ModalDirective;
  @ViewChild('updatekramodal') public updatekramodal: ModalDirective;
  @ViewChild('updatekpimodal') public updatekpimodal: ModalDirective;
  @ViewChild('deletedmodal') public deletedmodal: ModalDirective;

  
  ngOnInit() {
  }

  onSubmitEntity(){
  }
  
  handleSelected(z){
    console.log(z)

    if(z.selectedItem === 'Add Group')
    {
      this.addgroupModal.show();
    };
    if(z.selectedItem === 'Add Dimension')
    {
      this.adddimensionmodal.show();
    };
    if(z.selectedItem === 'Add KRA')
    {
      this.addkramodal.show();
    };
    if(z.selectedItem === 'Add KPI')
    {
      this.addkpimodal.show();
    };
    if(z.selectedItem === 'Update Group')
    {
      this.updategroupmodal.show();
    };
    if(z.selectedItem === 'Update Dimension')
    {
      this.updatedimensionmodal.show();
    }
    if(z.selectedItem === 'Update KRA')
    {
      this.updatekramodal.show();
    }
    if(z.selectedItem === 'Update KPI')
    {
      this.updatekpimodal.show();
    }
    if(z.selectedItem === 'Delete KPI' ||z.selectedItem ===  'Delete Dimension' ||z.selectedItem ===  'Delete Group' ||z.selectedItem ===  'Delete KRA')
    {
      this.deletedmodal.show();
    }
    

  }
 

  closeToggle(e){
    if(e==1){
      this.addgroupModal.show();
    }
    else{
      this.addgroupModal.hide();
      this.adddimensionmodal.hide();
      this.addkramodal.hide();
      this.addkpimodal.hide();
      this.updategroupmodal.hide();
      this.updatedimensionmodal.hide();
      this.updatekramodal.hide();
      this.updatekpimodal.hide();
      this.deletedmodal.hide();
    }
  }



  public tree: TreeModel = {
    value: 'Root',
    settings: this.Rootsettings(),
    children: [
      {
        value: 'Predictive',
        settings: this.Dimensionsettings(),
        children: [
          { 
            value: 'Marketing',
            settings: this.Krasettings(),
            children:[
              { 
                value: 'Business Development',
                settings: this.Kpisettings(),
                children:[
                  { value:'Prospects',settings: this.ManageKpisettings() },
                  { value:'Active Leads',settings: this.ManageKpisettings() },
                  { value:'Future Leads',settings: this.ManageKpisettings() },
                  { value:'Parallel Projects',settings: this.ManageKpisettings() },
                  { value:'Conversion Ratio',settings: this.ManageKpisettings() },
                  { value:'Wins',settings: this.ManageKpisettings() },
                  { value:'Losses',settings: this.ManageKpisettings() }
                ]
              },
              { value : 'Reputation',
              settings: this.Kpisettings(),
              children:[
                { value:'Glassdoor Review',settings: this.ManageKpisettings() },
                { value:'Google Review',settings: this.ManageKpisettings() }
              ]},
              { value : 'Coverage',
              settings: this.Kpisettings(),
              children:[
                { value:'Voice',settings: this.ManageKpisettings() },
                { value:'Social',settings: this.ManageKpisettings() },
                { value:'Mail',settings: this.ManageKpisettings() }
              ]},
              
              
            ] 
        }],
        
      },
      {
        value: 'System',
        settings: this.Dimensionsettings(),
        children: [
          { 
            value: 'Marketing',
            settings: this.Krasettings(),
            children:[
              { 
                value: 'Business Development',
                settings: this.Kpisettings(),
                children:[
                  { value:'Prospects',settings: this.ManageKpisettings() },
                  { value:'Active Leads',settings: this.ManageKpisettings() },
                  { value:'Future Leads',settings: this.ManageKpisettings() },
                  { value:'Parallel Projects',settings: this.ManageKpisettings() },
                  { value:'Conversion Ratio',settings: this.ManageKpisettings() },
                  { value:'Wins',settings: this.ManageKpisettings() },
                  { value:'Losses',settings: this.ManageKpisettings() }
                ]
              },
              { value : 'Reputation',
              settings: this.Kpisettings(),
              children:[
                { value:'Glassdoor Review',settings: this.ManageKpisettings() },
                { value:'Google Review',settings: this.ManageKpisettings() }
              ]},
              { value : 'Coverage',
              settings: this.Kpisettings(),
              children:[
                { value:'Voice',settings: this.ManageKpisettings() },
                { value:'Social',settings: this.ManageKpisettings() },
                { value:'Mail',settings: this.ManageKpisettings() }
              ]},
              
              
            ] 
        }],
        
      },
      {
        value: 'Control',
        settings: this.Dimensionsettings(),
        children: [
          { 
            value: 'Marketing',
            settings: this.Krasettings(),
            children:[
              { 
                value: 'Business Development',
                settings: this.Kpisettings(),
                children:[
                  { value:'Prospects',settings: this.ManageKpisettings() },
                  { value:'Active Leads',settings: this.ManageKpisettings() },
                  { value:'Future Leads',settings: this.ManageKpisettings() },
                  { value:'Parallel Projects',settings: this.ManageKpisettings() },
                  { value:'Conversion Ratio',settings: this.ManageKpisettings() },
                  { value:'Wins',settings: this.ManageKpisettings() },
                  { value:'Losses',settings: this.ManageKpisettings() }
                ]
              },
              { value : 'Reputation',
              settings: this.Kpisettings(),
              children:[
                { value:'Glassdoor Review',settings: this.ManageKpisettings() },
                { value:'Google Review',settings: this.ManageKpisettings() }
              ]},
              { value : 'Coverage',
              settings: this.Kpisettings(),
              children:[
                { value:'Voice',settings: this.ManageKpisettings() },
                { value:'Social',settings: this.ManageKpisettings() },
                { value:'Mail',settings: this.ManageKpisettings() }
              ]},
              
              
            ] 
        }],
        
      },
      {
        value: 'Process',
        settings: this.Dimensionsettings(),
        children: [
          { 
            value: 'Marketing',
            settings: this.Krasettings(),
            children:[
              { 
                value: 'Business Development',
                settings: this.Kpisettings(),
                children:[
                  { value:'Prospects',settings: this.ManageKpisettings() },
                  { value:'Active Leads',settings: this.ManageKpisettings() },
                  { value:'Future Leads',settings: this.ManageKpisettings() },
                  { value:'Parallel Projects',settings: this.ManageKpisettings() },
                  { value:'Conversion Ratio',settings: this.ManageKpisettings() },
                  { value:'Wins',settings: this.ManageKpisettings() },
                  { value:'Losses',settings: this.ManageKpisettings() }
                ]
              },
              { value : 'Reputation',
              settings: this.Kpisettings(),
              children:[
                { value:'Glassdoor Review',settings: this.ManageKpisettings() },
                { value:'Google Review',settings: this.ManageKpisettings() }
              ]},
              { value : 'Coverage',
              settings: this.Kpisettings(),
              children:[
                { value:'Voice',settings: this.ManageKpisettings() },
                { value:'Social',settings: this.ManageKpisettings() },
                { value:'Mail',settings: this.ManageKpisettings() }
              ]},
              
              
            ] 
        }],
        
      }
      /*{
        value: 'System',
        children: [{ value: 'Slutions' }, { value: 'Progress' }, { value: 'Innovation' }, { value: 'Talent' }, { value: 'Culture' }]
      },*/
      
    ]
  };


  private Krasettings(): TreeModelSettings {
    return {
      'cssClasses': {
        'expanded': ' fa fa-minus-square-o fa-lg',
        'collapsed': ' fa fa-plus-square-o fa-lg',
        'leaf': ' fa fa-lg',
        'empty': ' fa fa-plus-square-o disabled'
      },
      'templates': {
        'node': '<i class="fa fa-folder greencolor fa-lg"></i>',
        'leaf': '<i class="fa fa-folder greencolor fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon greencolor fa-lg"></i>'
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Add KRA', cssClass: 'fa fa-plus-square-o' },
        { action: NodeMenuItemAction.Custom, name: 'Update Dimension', cssClass: 'fa fa-pencil-square-o' },
        { action: NodeMenuItemAction.Custom, name: 'Delete Dimension', cssClass: 'fa fa-times' }
      ]
    };
  }

  private Kpisettings(): TreeModelSettings {
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
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Add KPI', cssClass: 'fa fa-plus-square-o' },
        { action: NodeMenuItemAction.Custom, name: 'Update KRA', cssClass: 'fa fa-pencil-square-o' },
        { action: NodeMenuItemAction.Custom, name: 'Delete KRA', cssClass: 'fa fa-times' }
      ]
    };
  }

  private ManageKpisettings(): TreeModelSettings {
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
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Update KPI', cssClass: 'fa fa-pencil-square-o' },
        { action: NodeMenuItemAction.Custom, name: 'Delete KPI', cssClass: 'fa fa-times' }
      ]
    };
  }

  private Dimensionsettings(): TreeModelSettings {
    return {
        'cssClasses': {
          'expanded': 'fa fa-minus-square-o fa-lg',
          'collapsed': 'fa fa-plus-square-o fa-lg',
          'leaf': 'fa fa-lg',
          'empty': 'fa fa-plus-square-o disabled'
        },
      'templates': {
        'node': '<i class="fa fa-folder bluecolor fa-lg"></i>',
        'leaf': '<i class="fa fa-folder bluecolor fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon bluecolor fa-lg"></i>'
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Add Dimension', cssClass: 'fa fa-plus-square-o' },
        { action: NodeMenuItemAction.Custom, name: 'Update Group', cssClass: 'fa fa-pencil-square-o' },
        { action: NodeMenuItemAction.Custom, name: 'Delete Group', cssClass: 'fa fa-times'}
      ]
    };
  }

  private Rootsettings(): TreeModelSettings {
    return {
      'cssClasses': {
        'expanded': 'fa fa-minus-square-o fa-lg',
        'collapsed': 'fa fa-plus-square-o fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-plus-square-o disabled'
      },
    'templates': {
      'node': '<i class="fa fa-yahoo greencolor fa-lg"></i>',
      'leaf': '<i class="fa fa-yahoo greencolor fa-lg"></i>',
      'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
    },
    'menuItems': [
      { action: NodeMenuItemAction.Custom, name: 'Add Group', cssClass: 'fa fa-plus-square-o' }
    ]
  };
  }

  public addDimension(id:any){
console.log(id);
  }
  /*public tree: TreeModel =
  {
    value: 'Prototype-based programming',
    settings: {
      'static': true,
      'rightMenu': true,
      'leftMenu': true,
      'cssClasses': {
        'expanded': 'fa fa-caret-down fa-lg',
        'collapsed': 'fa fa-caret-right fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-caret-right disabled'
      },
      'templates': {
        'node': '<i class="fa fa-folder-o fa-lg"></i>',
        'leaf': '<i class="fa fa-file-o fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
      },
      'menuItems': [
          { action: NodeMenuItemAction.Custom, name: 'Foo', cssClass: 'fa fa-arrow-right' },
          { action: NodeMenuItemAction.Custom, name: 'Bar', cssClass: 'fa fa-arrow-right' },
          { action: NodeMenuItemAction.Custom, name: 'Baz', cssClass: 'fa fa-arrow-right'}
        ]
      },
      children: [
        {value: 'JavaScript'},
        {value: 'CoffeeScript'},
        {value: 'Lua'}
      ]

    };*/
    
  

}
