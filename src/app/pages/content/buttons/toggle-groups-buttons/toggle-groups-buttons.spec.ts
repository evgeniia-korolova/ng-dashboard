import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleGroupsButtons } from './toggle-groups-buttons';

describe('ToggleGroupsButtons', () => {
  let component: ToggleGroupsButtons;
  let fixture: ComponentFixture<ToggleGroupsButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleGroupsButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleGroupsButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
