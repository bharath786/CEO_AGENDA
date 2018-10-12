import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingHighlightsComponent } from './marketing-highlights.component';

describe('MarketingHighlightsComponent', () => {
  let component: MarketingHighlightsComponent;
  let fixture: ComponentFixture<MarketingHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
