import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGemstoneComponent } from './show-gemstone.component';

describe('ShowGemstoneComponent', () => {
  let component: ShowGemstoneComponent;
  let fixture: ComponentFixture<ShowGemstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGemstoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowGemstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
