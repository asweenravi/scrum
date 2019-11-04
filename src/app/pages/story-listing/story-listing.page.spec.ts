import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListingPage } from './story-listing.page';

describe('StoryListingPage', () => {
  let component: StoryListingPage;
  let fixture: ComponentFixture<StoryListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
