import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInnovationComponent } from './admin-innovation.component';

describe('AdminInnovationComponent', () => {
  let component: AdminInnovationComponent;
  let fixture: ComponentFixture<AdminInnovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInnovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
