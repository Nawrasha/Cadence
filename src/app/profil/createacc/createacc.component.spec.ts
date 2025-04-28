import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccComponent};

describe('CreateaccComponent', () => {
  let component: CreateaccComponent;
  let fixture: ComponentFixture<CreateaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateaccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
