import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { TreeModel, NodeMenuItemAction, TreeModelSettings } from 'ng2-tree';

@Component({
  selector: 'app-admin-structure',
  templateUrl: './admin-structure.component.html',
  styleUrls: ['./admin-structure.component.css']
})
export class AdminStructureComponent implements OnInit {

  constructor() { }
  @ViewChild('adddivisionModal') public adddivisionModal: ModalDirective;
  @ViewChild('adddimensionmodal') public adddimensionmodal: ModalDirective;
  @ViewChild('addlocationmodal') public addlocationmodal: ModalDirective;
  @ViewChild('addentitymodal') public addentitymodal: ModalDirective;
  @ViewChild('deletedmodal') public deletedmodal: ModalDirective;
  @ViewChild('updatedivisionmodal') public updatedivisionmodal: ModalDirective;
  @ViewChild('updatelocationmodal') public updatelocationmodal: ModalDirective;
  @ViewChild('updateentitymodal') public updateentitymodal: ModalDirective;
  

  
  



  ngOnInit() {
  }

  onSubmit(){

  }

  onSubmitdimension(){
    
  }

  onSubmitEntity(){
    
  }

  onSubmitloacation(){
    
  }

  handleSelected(z){
    console.log(z);
    if(z.selectedItem === 'Add Division')
    {
      this.adddivisionModal.show();
    }

    if(z.selectedItem === 'Add/Edit Dimension')
    {
      this.adddimensionmodal.show();
    }

    if(z.selectedItem === 'Add Location')
    {
      this.addlocationmodal.show();
    }

    if(z.selectedItem === 'Add Entity')
    {
      this.addentitymodal.show();
    }
    if(z.selectedItem === 'Update Entity')
    {
      this.updateentitymodal.show();
    }
    if(z.selectedItem === 'Update Location')
    {
      this.updatelocationmodal.show();
    }
    if(z.selectedItem === 'Update Dimension')
    {
      this.adddimensionmodal.show();
    }
    if(z.selectedItem === 'Update Division')
    {
      this.updatedivisionmodal.show();
    }

    if(z.selectedItem === 'Delete Division'||z.selectedItem === 'Delete Department'||z.selectedItem ==='Delete Location')
    {
      this.deletedmodal.show();
    }

  }


  adddivisionModalToggle(e) {
    if (e == 1) {
      this.adddivisionModal.show();
    } else {
      this.adddivisionModal.hide();
      this.updatedivisionmodal.hide();
    }
  }

  adddimensionModalToggle(e){
    if(e == 1){
      this.adddimensionmodal.show();
    }
    else {
      this.adddimensionmodal.hide();
    }
  }

  addlocationmodalToggle(e){
    if(e == 1){
      this.addlocationmodal.show();
    }
    else {
      this.addlocationmodal.hide();
      this.updatelocationmodal.hide();
    }
  }
  addentitymodalToggle(e){
    if(e == 1){
      this.addentitymodal.show();
    }
    else {
      this.addentitymodal.hide();
      this.updateentitymodal.hide();
    }
  }

  deleteToggle(e){
    if(e == 1){
      this.deletedmodal.show();
    }
    else {
      this.deletedmodal.hide();
    }
  }





  public tree: TreeModel = {
    value: 'Root',
    id:1,
    settings: this.Rootsettings(),
    children: [
      {
        value: 'Division',
        settings: this.Divisionsettings(),
        children: [
          {
            value: 'Location',
            settings: this.Locationsettings(),
            children: [
              {
                value: 'Entity',
                settings: this.Entitysettings(),
                children: [
                  {
                    value: 'Predictive',
                    settings: this.Dimsettings(),
                    children: [
                      { value: 'Marketing', settings: this.Dimensionsettings() },
                      { value: 'Technology', settings: this.Dimensionsettings() }
                    ]},

                    {

                    value: 'System',
                    settings: this.Dimsettings(),
                    children: [
                      { value: 'Solution', settings: this.Dimensionsettings() },
                      { value: 'Progress', settings: this.Dimensionsettings() },
                      { value: 'Innovation', settings: this.Dimensionsettings() },
                      { value: 'Talent', settings: this.Dimensionsettings() },
                      { value: 'Culture', settings: this.Dimensionsettings() },
                      { value: 'Industries', settings: this.Dimensionsettings() },
                      { value: 'Alignment', settings: this.Dimensionsettings() },
                      { value: 'Risk', settings: this.Dimensionsettings() }


                   
                    ]
                  },
                  {

                    value: 'Control',
                    settings: this.Dimsettings(),
                    children: [
           
                      { value: 'Infrastructure', settings: this.Dimensionsettings() },
                      { value: 'Finance', settings: this.Dimensionsettings() },
                      { value: 'Statutory', settings: this.Dimensionsettings() }
                   
                    ]
                  },
                  {

                    value: 'Process',
                    settings: this.Dimsettings(),
                    children: [
                      { value: 'Projects', settings: this.Dimensionsettings() },
                      { value: 'Quality', settings: this.Dimensionsettings() }
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },

    ]
  };


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
        { action: NodeMenuItemAction.Custom, name: 'Add Division' },
     
      ]
    };
  }


  private Divisionsettings(): TreeModelSettings {
    return {
      'cssClasses': {
        'expanded': 'fa fa-minus-square-o fa-lg',
        'collapsed': 'fa fa-plus-square-o fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-plus-square-o disabled'
      },
      'templates': {
        'node': '<i class="fa fa-home greencolor fa-lg"></i>',
        'leaf': '<i class="fa fa-home greencolor fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Add Location' },
        { action: NodeMenuItemAction.Custom, name: 'Update Division' },
        { action: NodeMenuItemAction.Custom, name: 'Delete Division' }
      ]
    };
  }

  private Locationsettings(): TreeModelSettings {
    return {
      'cssClasses': {
        'expanded': 'fa fa-minus-square-o fa-lg',
        'collapsed': 'fa fa-plus-square-o fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-plus-square-o disabled'
      },
      'templates': {
        'node': '<i class="fa fa-map-marker greencolor fa-lg"></i>',
        'leaf': '<i class="fa fa-map-marker greencolor fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Add Entity' },
        { action: NodeMenuItemAction.Custom, name: 'Update Location' },
        { action: NodeMenuItemAction.Custom, name: 'Delete Location' }
      ]
    };
  }


  private Entitysettings(): TreeModelSettings {
    return {
      'cssClasses': {
        'expanded': 'fa fa-minus-square-o fa-lg',
        'collapsed': 'fa fa-plus-square-o fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-plus-square-o disabled'
      },
      'templates': {
        'node': '<i class="fa fa-bank greencolor fa-lg"></i>',
        'leaf': '<i class="fa fa-bank greencolor fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
      },
      'menuItems': [
        
        { action: NodeMenuItemAction.Custom, name: 'Add/Edit Dimension' },
        { action: NodeMenuItemAction.Custom, name: 'Update Entity' }
      ]
    };
  }

  private Departmentssettings(): TreeModelSettings {
    return {
      'cssClasses': {
        'expanded': 'fa fa-minus-square-o fa-lg',
        'collapsed': 'fa fa-plus-square-o fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-plus-square-o disabled'
      },
      'templates': {
        'node': '<i class="fa fa-building  greencolor fa-lg"></i>',
        'leaf': '<i class="fa fa-building  greencolor fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Add Dimension' },
        { action: NodeMenuItemAction.Custom, name: 'Update Department' },
        { action: NodeMenuItemAction.Custom, name: 'Delete Department' }
      ]
    };
  }

  
  private Dimsettings(): TreeModelSettings {
    return {
      'rightMenu': false,
      'cssClasses': {
        'expanded': 'fa fa-minus-square-o fa-lg',
        'collapsed': 'fa fa-plus-square-o fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-plus-square-o disabled'
      },
      'templates': {
        'node': '<i class="fa fa-building  greencolor fa-lg"></i>',
        'leaf': '<i class="fa fa-building  greencolor fa-lg"></i>',
        'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
      },
      'menuItems': [
        { action: NodeMenuItemAction.Custom, name: 'Add Dimension' },
        { action: NodeMenuItemAction.Custom, name: 'Update Department' },
        { action: NodeMenuItemAction.Custom, name: 'Delete Department' }
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
}
