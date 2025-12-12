import { ComponentFixture, TestBed } from '@angular/core/testing';
import SimpleForm from './simple-form';



describe('SimpleForm', () => {
  let component: SimpleForm;
  let fixture: ComponentFixture<SimpleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
