import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOderPageComponent } from './custom-oder-page.component';

describe('CustomOderPageComponent', () => {
  let component: CustomOderPageComponent;
  let fixture: ComponentFixture<CustomOderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
