import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProcessProjectComponent } from './admin-process-project.component';

describe('AdminProcessProjectComponent', () => {
  let component: AdminProcessProjectComponent;
  let fixture: ComponentFixture<AdminProcessProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProcessProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProcessProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
