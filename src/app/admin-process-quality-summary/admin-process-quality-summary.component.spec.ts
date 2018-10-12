import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProcessQualitySummaryComponent } from './admin-process-quality-summary.component';

describe('AdminProcessQualitySummaryComponent', () => {
  let component: AdminProcessQualitySummaryComponent;
  let fixture: ComponentFixture<AdminProcessQualitySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProcessQualitySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProcessQualitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
