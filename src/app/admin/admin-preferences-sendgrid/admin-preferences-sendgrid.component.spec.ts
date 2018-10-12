import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreferencesSendgridComponent } from './admin-preferences-sendgrid.component';

describe('AdminPreferencesSendgridComponent', () => {
  let component: AdminPreferencesSendgridComponent;
  let fixture: ComponentFixture<AdminPreferencesSendgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPreferencesSendgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPreferencesSendgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
