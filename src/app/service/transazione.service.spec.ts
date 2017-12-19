import { TestBed, inject } from '@angular/core/testing';

import { TransazioneService } from './transazione.service';

describe('TransazioneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransazioneService]
    });
  });

  it('should be created', inject([TransazioneService], (service: TransazioneService) => {
    expect(service).toBeTruthy();
  }));
});
