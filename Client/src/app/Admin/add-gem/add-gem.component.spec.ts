import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGemComponent } from './add-gem.component';

describe('AddGemComponent', () => {
  let component: AddGemComponent;
  let fixture: ComponentFixture<AddGemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
