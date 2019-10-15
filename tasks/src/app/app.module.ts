import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

/*
 For exposing an Angular Component as a Custom Element,
 we need to declare it and put it into the entryComponents section of a module.
 This is necessary because Angular Elements is creating it dynamically at runtime:
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    // Creates a custom element class based on an Angular component.
    // https://angular.io/api/elements/createCustomElement
    // returns a constructor function which is needed for the native customElements.define second prop
    const tileCE = createCustomElement(AppComponent, { injector: this.injector });

    // customElements.define(name, constructor, options);
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
    // register the element 'tkp-tasks' with the browser
    customElements.define('tkp-tasks', tileCE);

    // example usage of tkp-tasks can be found in index.html
  }
}
