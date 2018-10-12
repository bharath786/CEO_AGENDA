import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlInfrastructureComponent } from './admin-control-infrastructure.component';

describe('AdminControlInfrastructureComponent', () => {
  let component: AdminControlInfrastructureComponent;
  let fixture: ComponentFixture<AdminControlInfrastructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminControlInfrastructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
