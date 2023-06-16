import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'weiss-sandbox/loader';

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory:  () => {

        // append uswds scripts

        // const initScript = document.createElement("script");
        // initScript.src = "assets/uswds-init.min.js"
        // initScript.id = "uswds-init-script"

        // document.head.appendChild(initScript);

        // const mainScript = document.createElement("script");
        // mainScript.src = "assets/uswds.min.js"
        // mainScript.id = "uswds-script"

        // document.body.appendChild(mainScript)


        return defineCustomElements;
      },
      multi: true
    },
  ]
})
export class ComponentLibraryModule { }
