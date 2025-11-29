import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledButtons } from './filled-buttons';

describe('FilledButtons', () => {
  let component: FilledButtons;
  let fixture: ComponentFixture<FilledButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilledButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilledButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
