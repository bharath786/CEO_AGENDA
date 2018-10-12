import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolutionComponent } from './admin-solution.component';

describe('AdminSolutionComponent', () => {
  let component: AdminSolutionComponent;
  let fixture: ComponentFixture<AdminSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
