import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGiftComponent } from './manager-gift.component';

describe('ManagerGiftComponent', () => {
  let component: ManagerGiftComponent;
  let fixture: ComponentFixture<ManagerGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
