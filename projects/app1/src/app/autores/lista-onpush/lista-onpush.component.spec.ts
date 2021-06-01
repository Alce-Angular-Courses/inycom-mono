import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOnpushComponent } from './lista-onpush.component';

describe('ListaOnpushComponent', () => {
  let component: ListaOnpushComponent;
  let fixture: ComponentFixture<ListaOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
