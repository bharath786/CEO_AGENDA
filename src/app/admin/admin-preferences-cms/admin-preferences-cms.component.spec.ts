import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreferencesCmsComponent } from './admin-preferences-cms.component';

describe('AdminPreferencesCmsComponent', () => {
  let component: AdminPreferencesCmsComponent;
  let fixture: ComponentFixture<AdminPreferencesCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPreferencesCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPreferencesCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
