import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { AddEditLeaveComponent } from './add-edit-leave.component';
import { SharedService } from 'src/app/shared.service';

describe('AddEditLeaveComponent', () => {
  let component: AddEditLeaveComponent;
  let fixture: ComponentFixture<AddEditLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLeaveComponent ],
      imports:[HttpClientTestingModule],
      providers:[SharedService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
