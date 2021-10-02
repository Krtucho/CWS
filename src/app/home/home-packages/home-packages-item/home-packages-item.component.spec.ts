import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePackagesItemComponent } from './home-packages-item.component';

describe('HomePackagesItemComponent', () => {
  let component: HomePackagesItemComponent;
  let fixture: ComponentFixture<HomePackagesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePackagesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePackagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
