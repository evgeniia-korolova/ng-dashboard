import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedButtons } from './outlined-buttons';

describe('OutlinedButtons', () => {
  let component: OutlinedButtons;
  let fixture: ComponentFixture<OutlinedButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinedButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlinedButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
