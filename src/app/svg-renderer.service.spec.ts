import { TestBed } from '@angular/core/testing';

import { SvgRendererService } from './svg-renderer.service';

describe('SvgRendererService', () => {
  let service: SvgRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
