import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonButtons } from './icon-button-buttons';

describe('IconButtonButtons', () => {
  let component: IconButtonButtons;
  let fixture: ComponentFixture<IconButtonButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconButtonButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconButtonButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
