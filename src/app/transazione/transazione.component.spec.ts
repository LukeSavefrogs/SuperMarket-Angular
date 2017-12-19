import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneComponent } from './transazione.component';

describe('TransazioneComponent', () => {
  let component: TransazioneComponent;
  let fixture: ComponentFixture<TransazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
