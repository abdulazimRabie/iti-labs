import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppName } from './app-name';

describe('AppName', () => {
  let component: AppName;
  let fixture: ComponentFixture<AppName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
