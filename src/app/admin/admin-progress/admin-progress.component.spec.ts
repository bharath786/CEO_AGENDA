import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgressComponent } from './admin-progress.component';

describe('AdminProgressComponent', () => {
  let component: AdminProgressComponent;
  let fixture: ComponentFixture<AdminProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
