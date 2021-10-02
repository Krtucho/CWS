import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutUsInfoComponent } from './home-about-us-info.component';

describe('HomeAboutUsInfoComponent', () => {
  let component: HomeAboutUsInfoComponent;
  let fixture: ComponentFixture<HomeAboutUsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutUsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutUsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
