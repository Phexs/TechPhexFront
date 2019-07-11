import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUsersComponent } from './post-users.component';

describe('PostUsersComponent', () => {
  let component: PostUsersComponent;
  let fixture: ComponentFixture<PostUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
