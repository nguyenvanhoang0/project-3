import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGiftComponent } from './update-gift.component';

describe('UpdateGiftComponent', () => {
  let component: UpdateGiftComponent;
  let fixture: ComponentFixture<UpdateGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
