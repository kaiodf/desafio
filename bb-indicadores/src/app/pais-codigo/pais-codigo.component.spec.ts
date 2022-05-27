import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCodigoComponent } from './pais-codigo.component';

describe('PaisCodigoComponent', () => {
  let component: PaisCodigoComponent;
  let fixture: ComponentFixture<PaisCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
