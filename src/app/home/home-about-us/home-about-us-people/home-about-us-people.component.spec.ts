import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutUsPeopleComponent } from './home-about-us-people.component';

describe('HomeAboutUsPeopleComponent', () => {
  let component: HomeAboutUsPeopleComponent;
  let fixture: ComponentFixture<HomeAboutUsPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutUsPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutUsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
