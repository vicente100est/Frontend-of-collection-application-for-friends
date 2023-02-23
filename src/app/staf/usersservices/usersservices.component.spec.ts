import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersservicesComponent } from './usersservices.component';

describe('UsersservicesComponent', () => {
  let component: UsersservicesComponent;
  let fixture: ComponentFixture<UsersservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
