import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesMenuComponent } from './tables-menu.component';

describe('TablesMenuComponent', () => {
  let component: TablesMenuComponent;
  let fixture: ComponentFixture<TablesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
