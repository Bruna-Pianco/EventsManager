import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsReadComponent } from './imageSlider.component';

describe('EventsReadComponent', () => {
  let component: EventsReadComponent;
  let fixture: ComponentFixture<EventsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
