import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingserviceComponent } from './streamingservice.component';

describe('StreamingserviceComponent', () => {
  let component: StreamingserviceComponent;
  let fixture: ComponentFixture<StreamingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamingserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
