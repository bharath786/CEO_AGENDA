import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIndustriesComponent } from './admin-industries.component';

describe('AdminIndustriesComponent', () => {
  let component: AdminIndustriesComponent;
  let fixture: ComponentFixture<AdminIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
