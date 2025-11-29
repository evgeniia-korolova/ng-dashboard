import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextButtons } from './text-buttons';

describe('TextButtons', () => {
  let component: TextButtons;
  let fixture: ComponentFixture<TextButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
