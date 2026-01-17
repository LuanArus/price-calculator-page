import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSubMenuComponent } from './leftsubmenu.component';

describe('LeftSubMenuComponent', () => {
  let component: LeftSubMenuComponent;
  let fixture: ComponentFixture<LeftSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSubMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
