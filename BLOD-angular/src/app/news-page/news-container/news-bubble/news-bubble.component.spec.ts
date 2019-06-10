import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBubbleComponent } from './news-bubble.component';

describe('NewsBubbleComponent', () => {
  let component: NewsBubbleComponent;
  let fixture: ComponentFixture<NewsBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
