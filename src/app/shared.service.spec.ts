import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SharedService]
    });
    service = TestBed.inject(SharedService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
