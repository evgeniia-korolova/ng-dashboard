import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtons } from './icon-buttons';

describe('IconButtons', () => {
  let component: IconButtons;
  let fixture: ComponentFixture<IconButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
