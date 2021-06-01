import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresRefComponent } from './autores-ref.component';

describe('AutoresRefComponent', () => {
  let component: AutoresRefComponent;
  let fixture: ComponentFixture<AutoresRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
