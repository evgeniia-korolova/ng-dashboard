import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDescription } from './content-description';

describe('ContentDescription', () => {
  let component: ContentDescription;
  let fixture: ComponentFixture<ContentDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
