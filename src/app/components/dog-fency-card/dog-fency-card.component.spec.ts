import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFencyCardComponent } from './dog-fency-card.component';

describe('DogFencyCardComponent', () => {
  let component: DogFencyCardComponent;
  let fixture: ComponentFixture<DogFencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogFencyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogFencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
