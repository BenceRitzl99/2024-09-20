import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendelesLeadasComponent } from './rendeles-leadas.component';

describe('RendelesLeadasComponent', () => {
  let component: RendelesLeadasComponent;
  let fixture: ComponentFixture<RendelesLeadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendelesLeadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendelesLeadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
