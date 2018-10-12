import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreferencesTwilioComponent } from './admin-preferences-twilio.component';

describe('AdminPreferencesTwilioComponent', () => {
  let component: AdminPreferencesTwilioComponent;
  let fixture: ComponentFixture<AdminPreferencesTwilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPreferencesTwilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPreferencesTwilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
