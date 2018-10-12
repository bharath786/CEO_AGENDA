import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProcessQualityComponent } from './admin-process-quality.component';

describe('AdminProcessQualityComponent', () => {
  let component: AdminProcessQualityComponent;
  let fixture: ComponentFixture<AdminProcessQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProcessQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProcessQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
