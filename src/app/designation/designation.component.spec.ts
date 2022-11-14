import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from '../shared.service';

import { DesignationComponent } from './designation.component';

describe('DesignationComponent', () => {
  let component: DesignationComponent;
  let fixture: ComponentFixture<DesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationComponent ],
      imports:[HttpClientTestingModule],
      providers:[SharedService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
