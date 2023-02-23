import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystreamingComponent } from './mystreaming.component';

describe('MystreamingComponent', () => {
  let component: MystreamingComponent;
  let fixture: ComponentFixture<MystreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MystreamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MystreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
