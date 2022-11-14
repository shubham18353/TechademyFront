import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AddWorkComponent } from './add-work.component';
import { SharedService } from 'src/app/shared.service';

describe('AddWorkComponent', () => {
  let component: AddWorkComponent;
  let fixture: ComponentFixture<AddWorkComponent>;
  let http:HttpClient;
  let httpController:HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkComponent ],
      imports:[HttpClientTestingModule],
      providers:[SharedService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http=TestBed.inject(HttpClient);
    httpController=TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
