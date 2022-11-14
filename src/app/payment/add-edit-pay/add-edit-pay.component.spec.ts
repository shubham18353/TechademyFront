import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from 'src/app/shared.service';

import { AddEditPayComponent } from './add-edit-pay.component';

describe('AddEditPayComponent', () => {
  let component: AddEditPayComponent;
  let fixture: ComponentFixture<AddEditPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPayComponent ],
      imports:[HttpClientTestingModule],
      providers:[SharedService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
