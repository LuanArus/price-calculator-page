import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDrawerComponent } from './dynamicdrawer.component';

describe('DynamicDrawerComponent', () => {
  let component: DynamicDrawerComponent;
  let fixture: ComponentFixture<DynamicDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDrawerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DynamicDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
