import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowLeaveComponent } from './show-leave.component';
import { SharedService } from 'src/app/shared.service';

describe('ShowLeaveComponent', () => {
  let component: ShowLeaveComponent;
  let fixture: ComponentFixture<ShowLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLeaveComponent ],
      imports:[HttpClientTestingModule],
      providers:[SharedService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
