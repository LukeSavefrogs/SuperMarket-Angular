import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaCartaComponent } from './scelta-carta.component';

describe('SceltaCartaComponent', () => {
  let component: SceltaCartaComponent;
  let fixture: ComponentFixture<SceltaCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceltaCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceltaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
