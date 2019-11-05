import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStoryPointPage } from './view-story-point.page';

describe('ViewStoryPointPage', () => {
  let component: ViewStoryPointPage;
  let fixture: ComponentFixture<ViewStoryPointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStoryPointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStoryPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
