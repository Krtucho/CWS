import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicesItemComponent } from './home-services-item.component';

describe('HomeServicesItemComponent', () => {
  let component: HomeServicesItemComponent;
  let fixture: ComponentFixture<HomeServicesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeServicesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServicesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
