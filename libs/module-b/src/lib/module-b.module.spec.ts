import { async, TestBed } from '@angular/core/testing';
import { ModuleBModule } from './module-b.module';

describe('ModuleBModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModuleBModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ModuleBModule).toBeDefined();
  });
});
