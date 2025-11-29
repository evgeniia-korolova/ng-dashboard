import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonalButtons } from './tonal-buttons';

describe('TonalButtons', () => {
  let component: TonalButtons;
  let fixture: ComponentFixture<TonalButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonalButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonalButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
