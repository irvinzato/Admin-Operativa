import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsCaptureDialogComponent } from './operations-capture-dialog.component';

describe('OperationsCaptureDialogComponent', () => {
  let component: OperationsCaptureDialogComponent;
  let fixture: ComponentFixture<OperationsCaptureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsCaptureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsCaptureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
