import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationCaptureComponent } from './operation-capture.component';

describe('OperationCaptureComponent', () => {
  let component: OperationCaptureComponent;
  let fixture: ComponentFixture<OperationCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
