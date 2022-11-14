import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let serv:FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService,FormBuilder]
    });
    service = TestBed.inject(UserService);
    serv=TestBed.inject(FormBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(serv).toBeTruthy();
  });
});
