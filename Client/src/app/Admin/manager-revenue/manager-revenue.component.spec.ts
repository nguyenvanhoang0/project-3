import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRevenueComponent } from './manager-revenue.component';

describe('ManagerRevenueComponent', () => {
  let component: ManagerRevenueComponent;
  let fixture: ComponentFixture<ManagerRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRevenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
