import { Component, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'sandbox-main-content',
  styleUrl: 'sandbox-main-content.css',
  shadow: false,
})
export class SandboxMainContent {
  private Components = [
    {
      'name': 'Design Tokens',
      'hash': 'design-tokens',
      'content': () => <design-token-management></design-token-management>
    },
    {
      'name': 'Header',
      'hash': 'header',
      'content': () => {

        return <div>

        <p>Header</p>

        <uswds-header></uswds-header>


      </div>


      }

    },
    {
      'name': 'SideNav',
      'hash': 'sidenav',
      'content':  () => {
        return <uswds-side-nav>
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
    },
    {
      'name': 'Accordion',
      'hash': 'accordion',
      'content': () => {
        return       <div>

        <p>Accordion</p>

        <uswds-accordion>
          <uswds-accordion-item header="Test 1" expanded={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
          <uswds-accordion-item header="Test 2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
        </uswds-accordion>

        <p>Bordered Accordion</p>

        <uswds-accordion accordion-type='bordered'>
          <uswds-accordion-item header="Bordered Test 1" expanded={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
          <uswds-accordion-item header="Bordered Test 2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
        </uswds-accordion>


        <p>Multiselectable Accordion</p>

        <uswds-accordion accordion-type='multiselectable'>
          <uswds-accordion-item header="Multi-selectable Test 1" expanded={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
          <uswds-accordion-item header="Multi-selectable Test 2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
        </uswds-accordion>



      </div>
      }

    },
  
  ]

  @State() hash: string = window.location.hash.split("#")[1];

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
               {component?.content ? component.content() : 

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


