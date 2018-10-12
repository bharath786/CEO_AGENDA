import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlFinanceComponent } from './admin-control-finance.component';

describe('AdminControlFinanceComponent', () => {
  let component: AdminControlFinanceComponent;
  let fixture: ComponentFixture<AdminControlFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminControlFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
