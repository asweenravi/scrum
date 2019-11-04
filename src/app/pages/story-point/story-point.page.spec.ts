import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPointPage } from './story-point.page';

describe('StoryPointPage', () => {
  let component: StoryPointPage;
  let fixture: ComponentFixture<StoryPointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
