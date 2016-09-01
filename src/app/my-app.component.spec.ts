import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyAppComponent } from '../app/my-app.component';

beforeEachProviders(() => [MyAppComponent]);

describe('App: MyApp', () => {
  it('should create the app',
      inject([MyAppComponent], (app: MyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-app works!\'',
      inject([MyAppComponent], (app: MyAppComponent) => {
    expect(app.title).toEqual('my-app works!');
  }));
});
