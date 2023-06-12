import { Component, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'sandbox-main-content',
  styleUrl: 'sandbox-main-content.css',
  shadow: false,
})
export class SandboxMainContent {
  private Components = [

    {
      'name': 'Header',
      'hash': 'header',
      'content':
      <div>

        <p>Header</p>

        <uswds-header></uswds-header>


      </div>
    },
    {
      'name': 'SideNav',
      'hash': 'sidenav',
      'content':         <uswds-side-nav>
      <uswds-side-nav-item>
        <a class="usa-current">Item</a>
      </uswds-side-nav-item>
      <uswds-side-nav-item>
        <a>Item 2</a>
        <uswds-side-nav-sub-list>
          <uswds-side-nav-item>
            <a >Item 2 Child</a>
          </uswds-side-nav-item>
        </uswds-side-nav-sub-list>
      </uswds-side-nav-item>
  </uswds-side-nav>
    }
  
  
  ]

  @State() hash: string;

  @Listen('hashchange', {target: 'window'})
  onHashChange(event: any){
    this.hash = window.location.hash.split("#")[1];
  }

  render() {

    const component = this.Components.find((component) => component.hash === this.hash);

    if(!component){
      // dome
    }

    
    return (
      <Host>
          
        <div class="sandbox-main-content-wrapper">
          <aside class="sidenav">
            <uswds-side-nav>

              <uswds-side-nav-item>
                  <a href='' class={!this.hash ? 'usa-current' : null }>Welcome</a>
              </uswds-side-nav-item>

                {
                  this.Components.map((component) => 

                    <uswds-side-nav-item>
                      <a href={'#' + component.hash} class={this.hash === component.hash ? 'usa-current' : null}>{component.name}</a>
                    </uswds-side-nav-item>
                  
                  )
                }


            </uswds-side-nav>
            </aside>
            <div class="main-content">
               {component?.content ? component.content : 

                <div>
                  Welcome to the sandbox!
                  <p>Here you will find various components from the USWDS to test tokens with</p>
                  
                </div>

       
               
               }
            </div>
        </div>
      </Host>
    );
  }

}


