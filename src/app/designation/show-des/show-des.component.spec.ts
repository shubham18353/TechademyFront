import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

import { ShowDesComponent } from './show-des.component';

describe('ShowDesComponent', () => {
  let component: ShowDesComponent;
  let fixture: ComponentFixture<ShowDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDesComponent ],
      imports:[HttpClientTestingModule],
      providers:[SharedService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
