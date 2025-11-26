import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsPannel } from './widgets-pannel';

describe('WidgetsPannel', () => {
  let component: WidgetsPannel;
  let fixture: ComponentFixture<WidgetsPannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsPannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsPannel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
