import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRiskComponent } from './admin-risk.component';

describe('AdminRiskComponent', () => {
  let component: AdminRiskComponent;
  let fixture: ComponentFixture<AdminRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
