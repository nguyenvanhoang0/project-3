import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGemComponent } from './manager-gem.component';

describe('ManagerGemComponent', () => {
  let component: ManagerGemComponent;
  let fixture: ComponentFixture<ManagerGemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerGemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerGemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
