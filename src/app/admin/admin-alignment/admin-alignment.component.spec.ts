import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlignmentComponent } from './admin-alignment.component';

describe('AdminAlignmentComponent', () => {
  let component: AdminAlignmentComponent;
  let fixture: ComponentFixture<AdminAlignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
