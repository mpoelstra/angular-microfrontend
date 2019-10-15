# Angular Microfrontend playground

In this repo you will find two seperate Angular apps which will expose a CustomElement with the help from [@angular/elements](https://angular.io/guide/elements). Thx to [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus) the build artifacts will be 1 (optimizable) js file which can be (dynamically) loaded in a host environment (drupal, wordpress, shell angular app, etc...)

## live example

The contents of the drupalhost folder is being served at http://poelstra.org/tkp/microfrontend/
The tasks and the statusbar (top right) are isolated web-components/angular-elements. They communicate with each other with the help of [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events).

## Used resources

* https://medium.com/@het/micro-front-end-with-angular-elements-web-components-c56b7a235bcb
* https://github.com/manfredsteyer/ngx-build-plus
* https://www.softwarearchitekt.at/aktuelles/angular-elements-part-i/
* https://martinfowler.com/articles/micro-frontends.html#AutonomousTeams
* https://www.softwarearchitekt.at/aktuelles/its-about-cutting-your-domain-not-first-and-foremost-about-micro-frontends/
* https://www.softwarearchitekt.at/aktuelles/a-software-architects-approach-towards/
* https://www.softwarearchitekt.at/konferenzen/angular-react-vue-and-co-peacefully-united-thanks-to-web-components-and-microfrontends/
* https://angular.io/guide/elements