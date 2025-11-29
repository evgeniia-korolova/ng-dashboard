import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedButtons } from './elevated-buttons';

describe('ElevatedButtons', () => {
  let component: ElevatedButtons;
  let fixture: ComponentFixture<ElevatedButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevatedButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevatedButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
