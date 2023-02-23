import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypaymentComponent } from './mypayment.component';

describe('MypaymentComponent', () => {
  let component: MypaymentComponent;
  let fixture: ComponentFixture<MypaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
