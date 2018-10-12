import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCultureComponent } from './admin-culture.component';

describe('AdminCultureComponent', () => {
  let component: AdminCultureComponent;
  let fixture: ComponentFixture<AdminCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
