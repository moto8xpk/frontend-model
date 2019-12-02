import { TestBed } from '@angular/core/testing';

import { DeepLearningApiService } from './deep-learning-api.service';

describe('DeepLearningApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeepLearningApiService = TestBed.get(DeepLearningApiService);
    expect(service).toBeTruthy();
  });
});
