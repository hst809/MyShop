import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsNavComponent } from './bs-nav.component';

describe('BsNavComponent', () => {
  let component: BsNavComponent;
  let fixture: ComponentFixture<BsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsNavComponent]
    });
    fixture = TestBed.createComponent(BsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
