import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlStatutoryComponent } from './admin-control-statutory.component';

describe('AdminControlStatutoryComponent', () => {
  let component: AdminControlStatutoryComponent;
  let fixture: ComponentFixture<AdminControlStatutoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminControlStatutoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlStatutoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
