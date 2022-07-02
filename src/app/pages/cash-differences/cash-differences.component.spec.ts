import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDifferencesComponent } from './cash-differences.component';

describe('CashDifferencesComponent', () => {
  let component: CashDifferencesComponent;
  let fixture: ComponentFixture<CashDifferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashDifferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDifferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
