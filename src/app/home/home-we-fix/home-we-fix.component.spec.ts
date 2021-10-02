import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeFixComponent } from './home-we-fix.component';

describe('HomeWeFixComponent', () => {
  let component: HomeWeFixComponent;
  let fixture: ComponentFixture<HomeWeFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWeFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWeFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
