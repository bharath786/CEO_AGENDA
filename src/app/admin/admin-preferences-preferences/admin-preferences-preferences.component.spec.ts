import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreferencesPreferencesComponent } from './admin-preferences-preferences.component';

describe('AdminPreferencesPreferencesComponent', () => {
  let component: AdminPreferencesPreferencesComponent;
  let fixture: ComponentFixture<AdminPreferencesPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPreferencesPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPreferencesPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
