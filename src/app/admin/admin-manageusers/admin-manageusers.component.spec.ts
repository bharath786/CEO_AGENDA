import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageusersComponent } from './admin-manageusers.component';

describe('AdminManageusersComponent', () => {
  let component: AdminManageusersComponent;
  let fixture: ComponentFixture<AdminManageusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
