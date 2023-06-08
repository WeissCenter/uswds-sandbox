import { Component, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'sandbox-main-content',
  styleUrl: 'sandbox-main-content.css',
  shadow: false,
})
export class SandboxMainContent {

  @State() hash: string;

  @Listen('hashchange', {target: 'window'})
  onHashChange(event: any){
    this.hash = window.location.hash.split("#")[1];
  }

  render() {

    let page = <div>Hello and Welcome</div>

    switch(this.hash){
      case 'header':{
        page = <uswds-header></uswds-header>
        break;
      }
    }



    
    return (
      <Host>
        <div class="sandbox-main-content-wrapper">
          <aside class="sidenav">
            <uswds-side-nav>
              <uswds-side-nav-item>
                <a href="#header" class="usa-current">Header</a>
              </uswds-side-nav-item>
              <uswds-side-nav-item>
                <a href="#sidenav">Sidenav</a>
              </uswds-side-nav-item>
            </uswds-side-nav>
            </aside>
            <div class="main-content">
               {page}
            </div>
        </div>
      </Host>
    );
  }

}
