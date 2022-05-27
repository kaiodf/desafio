import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEpisComponent } from './p-epis.component';

describe('PEpisComponent', () => {
  let component: PEpisComponent;
  let fixture: ComponentFixture<PEpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEpisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PEpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
