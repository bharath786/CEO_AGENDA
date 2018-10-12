import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTalentComponent } from './admin-talent.component';

describe('AdminTalentComponent', () => {
  let component: AdminTalentComponent;
  let fixture: ComponentFixture<AdminTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
