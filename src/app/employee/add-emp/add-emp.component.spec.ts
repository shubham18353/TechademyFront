import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from 'src/app/shared.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddEmpComponent } from './add-emp.component';

describe('AddEmpComponent', () => {
  let component: AddEmpComponent;
  let fixture: ComponentFixture<AddEmpComponent>;
  let  service:SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpComponent ],
      providers:[SharedService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
