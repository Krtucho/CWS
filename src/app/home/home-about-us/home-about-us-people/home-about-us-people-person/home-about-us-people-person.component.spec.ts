import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutUsPeoplePersonComponent } from './home-about-us-people-person.component';

describe('HomeAboutUsPeoplePersonComponent', () => {
  let component: HomeAboutUsPeoplePersonComponent;
  let fixture: ComponentFixture<HomeAboutUsPeoplePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutUsPeoplePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutUsPeoplePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
