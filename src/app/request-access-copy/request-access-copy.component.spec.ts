import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RequestAccessCopyComponent } from './request-access-copy.component';

describe('Component: RequestAccessCopy', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RequestAccessCopyComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([RequestAccessCopyComponent],
      (component: RequestAccessCopyComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(RequestAccessCopyComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(RequestAccessCopyComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-request-access-copy></app-request-access-copy>
  `,
  directives: [RequestAccessCopyComponent]
})
class RequestAccessCopyComponentTestController {
}

