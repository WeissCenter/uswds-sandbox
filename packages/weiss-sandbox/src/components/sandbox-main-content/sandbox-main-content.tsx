import { Component, Host, Listen, Prop, State, h } from '@stencil/core';
import { uswdsInitComponents } from '../../utils/utils';
import { SandboxComponentItem } from '../../components';
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

        const component: SandboxComponentItem = {
          componentName: 'Header',
          componentDesc: 'USWDS Header',
          props: [
            { name: 'headerTitle', type: 'string', default: 'Project Title', description: 'Title for the header' },
            { name: 'enableSearch', type: 'boolean', default: 'false', description: 'Whether to enable to search bar for not' },
            { name: 'navItems', type: 'HeaderNavItem[]', default: '[]', description: 'List of Navigation menus and items' }
          ],
          code: [
            { code: `<uswds-header header-title="USWDS Sandbox"></uswds-header>`, language: 'html', accordionHeader: 'Header Example' },
            {
              code: `export interface HeaderNavItem{
              current: boolean;
              menuTitle?: string;
              type: HeaderNavItemType;
              items?: HeaderSubMenuItem[];
              item?: HeaderNavLink;
          }
          
          export interface HeaderSubMenuItem{
              label: string;
              href: string;
          }
          
          export interface HeaderNavLink{
              label: string;
              href: string;
          }
          
          export enum HeaderNavItemType{
              SUB_MENU,
              NAV_LINK
          }`, language: 'javascript', accordionHeader: 'HeaderNavItem Model'
            },


          ]
        }


        return <sandbox-component component={component}>

          <uswds-header slot="component"></uswds-header>

        </sandbox-component>




      }

    },
    {
      'name': 'SideNav',
      'hash': 'sidenav',
      'content': () => {

        const component: SandboxComponentItem = {
          componentName: 'Side Navigation',
          componentDesc: 'USWDS Side Navigation',
          props: [],
          code: [
            {
              code: `<uswds-side-nav>
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
          </uswds-side-nav>`, language: 'html', accordionHeader: 'Side Navigation Example'
            },
          ]
        }

        return <sandbox-component component={component}>

          <uswds-side-nav slot="component">
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

        </sandbox-component>


      }
    },
    {
      'name': 'Accordion',
      'hash': 'accordion',
      'content': () => {

        const component: SandboxComponentItem = {
          componentName: 'Accordion',
          componentDesc: 'USWDS Accordion',
          props: {
            'Accordion Properties': {description: '', props: [{ name: 'accordionType', type: 'borderless | bordered | multiselectable | multiselectable-bordered', default: 'borderless', description: 'the type of accordion items to show' }]},
            'Accordion Item Properties': {description: '', props: [
              { name: 'header', type: 'string', default: 'null', description: 'Header of the accordion item' },
              { name: 'expanded', type: 'boolean', default: 'false', description: 'Whether the accordion item is expanded by default or not' },
            ]}
          },
          code: [
            {
              code: `<uswds-accordion>
              <uswds-accordion-item header='Header'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
              </uswds-accordion-item>
    </uswds-accordion>`, language: 'html', accordionHeader: 'Accordion Example'
            }

          ]
        }


        return <sandbox-component component={component}>

          <h3 slot="component">Borderless Accordion</h3>

          <uswds-accordion slot="component">
            <uswds-accordion-item header="Test 1" expanded={true}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
            <uswds-accordion-item header="Test 2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
          </uswds-accordion>

          <h3 slot="component">Bordered Accordion</h3>

          <uswds-accordion slot="component" accordion-type='bordered'>
            <uswds-accordion-item header="Bordered Test 1" expanded={true}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
            <uswds-accordion-item header="Bordered Test 2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
          </uswds-accordion>


          <h3 slot="component">Multiselectable Accordion</h3>

          <uswds-accordion slot="component" accordion-type='multiselectable'>
            <uswds-accordion-item header="Multi-selectable Test 1" expanded={true}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
            <uswds-accordion-item header="Multi-selectable Test 2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
          </uswds-accordion>


          <h3 slot="component">Multiselectable Bordered Accordion</h3>

          <uswds-accordion slot="component" accordion-type='multiselectable-bordered'>
            <uswds-accordion-item header="Multi-selectable Bordered Test 1" expanded={true}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
            <uswds-accordion-item header="Multi-selectable Bordered Test 2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
            </uswds-accordion-item>
          </uswds-accordion>



        </sandbox-component>


        //         const code = `<uswds-accordion>
        //           <uswds-accordion-item header='Header'>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
        //           </uswds-accordion-item>
        // </uswds-accordion>`

        //         return <div>

        //           <h3>Implementation</h3>

        //           <h4>Accordion Properties</h4>

        //           <p>Defines the input properties of the component.</p>

        //           <uswds-table>
        //             <tr slot="header">
        //               <th scope="col">Name</th>
        //               <th scope="col">Type</th>
        //               <th scope="col">Default</th>
        //               <th scope="col">Description</th>
        //             </tr>

        //             <tr slot="body">
        //               <th scope="row">accordionType</th>
        //               <td>
        //                 borderless | bordered | multiselectable | multiselectable-bordered
        //               </td>
        //               <td>borderless</td>
        //               <td>the type of accordion items to show</td>
        //             </tr>

        //           </uswds-table>

        //           <h4>Accordion Item Properties</h4>

        //           <p>Defines the input properties of the component.</p>

        //           <uswds-table>
        //             <tr slot="header">
        //               <th scope="col">Name</th>
        //               <th scope="col">Type</th>
        //               <th scope="col">Default</th>
        //               <th scope="col">Description</th>
        //             </tr>

        //             <tr slot="body">
        //               <th scope="row">header</th>
        //               <td>
        //                 string
        //               </td>
        //               <td>null</td>
        //               <td>Header of the accordion item</td>
        //             </tr>

        //             <tr slot="body">
        //               <th scope="row">expanded</th>
        //               <td>
        //                 boolean
        //               </td>
        //               <td>false</td>
        //               <td>Whether the accordion item is expanded by default or not</td>
        //             </tr>
        //           </uswds-table>


        //           <uswds-accordion accordionType='bordered'>
        //             <uswds-accordion-item header='Accordion Example'>
        //               <code-snippet readonly={true} language="html" code={code} ></code-snippet>
        //             </uswds-accordion-item>
        //           </uswds-accordion>


        //         </div>
      }

    },
    {
      "name": "Table",
      "hash": "table",
      'content': () => {


        const component: SandboxComponentItem = {
          componentName: 'Table',
          componentDesc: 'USWDS Table',
          props: {
            'Table Properties': {props: [
              { name: 'tableType', type: 'borderless | bordered', default: 'borderless', description: 'the type of table' },
              { name: 'caption', type: 'string', default: 'null', description: 'table caption' }
            ]},
            'Table Slots': {
              description: 'Defines the available slots for the component',
              props: [
                { name: 'header', description: 'table headers' },
                { name: 'body', description: 'table body' }
              
              ]
            }
          },
          code: [
            {
              code: `<uswds-table>

              <tr slot="header">
                <th scope="col">Document title</th>
                <th scope="col">Description</th>
                <th scope="col">Year</th>
              </tr>
      
              <tr slot="body">
                <th scope="row">Declaration of Independence</th>
                <td>
                  Statement adopted by the Continental Congress declaring independence
                  from the British Empire.
                </td>
                <td>1776</td>
              </tr>
              <tr slot="body">
                <th scope="row">Bill of Rights</th>
                <td>
                  The first ten amendments of the U.S. Constitution guaranteeing rights
                  and freedoms.
                </td>
                <td>1791</td>
              </tr>
              <tr slot="body">
                <th scope="row">Declaration of Sentiments</th>
                <td>
                  A document written during the Seneca Falls Convention outlining the
                  rights that American women should be entitled to as citizens.
                </td>
                <td>1848</td>
              </tr>
              <tr slot="body">
                <th scope="row">Emancipation Proclamation</th>
                <td>
                  An executive order granting freedom to slaves in designated southern
                  states.
                </td>
                <td>1863</td>
              </tr>
            </uswds-table>`, language: 'html', accordionHeader: 'Table Example'
            }

          ]
        }




        return <sandbox-component component={component}>

          <h3 slot="component">Borderless Table</h3>


          <uswds-table slot="component">

            <tr slot="header">
              <th scope="col">Document title</th>
              <th scope="col">Description</th>
              <th scope="col">Year</th>
            </tr>

            <tr slot="body">
              <th scope="row">Declaration of Independence</th>
              <td>
                Statement adopted by the Continental Congress declaring independence
                from the British Empire.
              </td>
              <td>1776</td>
            </tr>
            <tr slot="body">
              <th scope="row">Bill of Rights</th>
              <td>
                The first ten amendments of the U.S. Constitution guaranteeing rights
                and freedoms.
              </td>
              <td>1791</td>
            </tr>
            <tr slot="body">
              <th scope="row">Declaration of Sentiments</th>
              <td>
                A document written during the Seneca Falls Convention outlining the
                rights that American women should be entitled to as citizens.
              </td>
              <td>1848</td>
            </tr>
            <tr slot="body">
              <th scope="row">Emancipation Proclamation</th>
              <td>
                An executive order granting freedom to slaves in designated southern
                states.
              </td>
              <td>1863</td>
            </tr>
          </uswds-table>





        </sandbox-component>



        //     const borderedCode = `<uswds-table table-table="bordered">

        //   <tr slot="header">
        //     <th scope="col">Document title</th>
        //     <th scope="col">Description</th>
        //     <th scope="col">Year</th>
        //   </tr>

        //   <tr slot="body">
        //     <th scope="row">Declaration of Independence</th>
        //     <td>
        //       Statement adopted by the Continental Congress declaring independence
        //       from the British Empire.
        //     </td>
        //     <td>1776</td>
        //   </tr>
        //   <tr slot="body">
        //     <th scope="row">Bill of Rights</th>
        //     <td>
        //       The first ten amendments of the U.S. Constitution guaranteeing rights
        //       and freedoms.
        //     </td>
        //     <td>1791</td>
        //   </tr>
        //   <tr slot="body">
        //     <th scope="row">Declaration of Sentiments</th>
        //     <td>
        //       A document written during the Seneca Falls Convention outlining the
        //       rights that American women should be entitled to as citizens.
        //     </td>
        //     <td>1848</td>
        //   </tr>
        //   <tr slot="body">
        //     <th scope="row">Emancipation Proclamation</th>
        //     <td>
        //       An executive order granting freedom to slaves in designated southern
        //       states.
        //     </td>
        //     <td>1863</td>
        //   </tr>
        // </uswds-table>`



        //     return <div>


        //       <h2>Table</h2>

        //       <p>USWDS Table</p>

        //       <h3>Borderless Table</h3>


        //       <uswds-table>

        //         <tr slot="header">
        //           <th scope="col">Document title</th>
        //           <th scope="col">Description</th>
        //           <th scope="col">Year</th>
        //         </tr>

        //         <tr slot="body">
        //           <th scope="row">Declaration of Independence</th>
        //           <td>
        //             Statement adopted by the Continental Congress declaring independence
        //             from the British Empire.
        //           </td>
        //           <td>1776</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Bill of Rights</th>
        //           <td>
        //             The first ten amendments of the U.S. Constitution guaranteeing rights
        //             and freedoms.
        //           </td>
        //           <td>1791</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Declaration of Sentiments</th>
        //           <td>
        //             A document written during the Seneca Falls Convention outlining the
        //             rights that American women should be entitled to as citizens.
        //           </td>
        //           <td>1848</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Emancipation Proclamation</th>
        //           <td>
        //             An executive order granting freedom to slaves in designated southern
        //             states.
        //           </td>
        //           <td>1863</td>
        //         </tr>
        //       </uswds-table>

        //       <uswds-accordion accordionType='bordered'>
        //         <uswds-accordion-item header='Borderless Example'>
        //           <code-snippet readonly={true} language="html" code={borderlessCode} ></code-snippet>
        //         </uswds-accordion-item>
        //       </uswds-accordion>


        //       <h3>Bordered Table</h3>

        //       <uswds-table table-type="bordered">

        //         <tr slot="header">
        //           <th scope="col">Document title</th>
        //           <th scope="col">Description</th>
        //           <th scope="col">Year</th>
        //         </tr>

        //         <tr slot="body">
        //           <th scope="row">Declaration of Independence</th>
        //           <td>
        //             Statement adopted by the Continental Congress declaring independence
        //             from the British Empire.
        //           </td>
        //           <td>1776</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Bill of Rights</th>
        //           <td>
        //             The first ten amendments of the U.S. Constitution guaranteeing rights
        //             and freedoms.
        //           </td>
        //           <td>1791</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Declaration of Sentiments</th>
        //           <td>
        //             A document written during the Seneca Falls Convention outlining the
        //             rights that American women should be entitled to as citizens.
        //           </td>
        //           <td>1848</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Emancipation Proclamation</th>
        //           <td>
        //             An executive order granting freedom to slaves in designated southern
        //             states.
        //           </td>
        //           <td>1863</td>
        //         </tr>
        //       </uswds-table>

        //       <uswds-accordion accordionType='bordered'>
        //         <uswds-accordion-item header='Bordered Example'>
        //           <code-snippet readonly={true} language="html" code={borderedCode} ></code-snippet>
        //         </uswds-accordion-item>
        //       </uswds-accordion>


        //       <h3>Sortable Table</h3>



        //       <uswds-table table-type="bordered">

        //         <tr slot="header">
        //           <th data-sortable scope="col" role="columnheader">Alphabetical</th>
        //           <th data-sortable scope="col" role="columnheader">Month</th>
        //           <th data-sortable scope="col" role="columnheader">Percent</th>
        //           <th data-sortable scope="col" role="columnheader">Count</th>
        //           <th data-sortable scope="col" role="columnheader">Rank (Ordinal)</th>
        //           <th data-sortable scope="col" role="columnheader">Rank (Cardinal)</th>
        //           <th data-sortable scope="col" role="columnheader">Unix Timestamp</th>
        //         </tr>

        //         <tr slot="body">
        //           <th scope="row">Tango</th>
        //           <td data-sort-value="3">March</td>
        //           <td
        //             data-sort-value="0.206"
        //             class="font-mono-sm text-tabular text-right"
        //           >
        //             20.6%
        //           </td>
        //           <td
        //             data-sort-value="23612"
        //             class="font-mono-sm text-tabular text-right"
        //           >
        //             23,612
        //           </td>
        //           <td data-sort-value="3">Third</td>
        //           <td data-sort-value="3">3rd</td>
        //           <td data-sort-value="1332884673452">March 27, 2012</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Foxtrot</th>
        //           <td data-sort-value="4">April</td>
        //           <td
        //             data-sort-value="0.026"
        //             class="font-mono-sm text-tabular text-right"
        //           >
        //             2.6%
        //           </td>
        //           <td data-sort-value="-32" class="font-mono-sm text-tabular text-right">
        //             -32
        //           </td>
        //           <td data-sort-value="1">First</td>
        //           <td data-sort-value="1">1st</td>
        //           <td data-sort-value="1617974313232">April 9, 2021</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Hilo</th>
        //           <td data-sort-value="1">January</td>
        //           <td
        //             data-sort-value="-0.036"
        //             class="font-mono-sm text-tabular text-right"
        //           >
        //             -3.6%
        //           </td>
        //           <td
        //             data-sort-value="0.002"
        //             class="font-mono-sm text-tabular text-right"
        //           >
        //             0.002
        //           </td>
        //           <td data-sort-value="2">Second</td>
        //           <td>2nd</td>
        //           <td data-sort-value="1611169964684">January 20, 2021</td>
        //         </tr>
        //         <tr slot="body">
        //           <th scope="row">Bravo</th>
        //           <td data-sort-value="12">December</td>
        //           <td
        //             data-sort-value="-3.006"
        //             class="font-mono-sm text-tabular text-right"
        //           >
        //             -300.6%
        //           </td>
        //           <td data-sort-value="0" class="font-mono-sm text-tabular text-right">
        //             0
        //           </td>
        //           <td data-sort-value="4">Fourth</td>
        //           <td data-sort-value="4">4th</td>
        //           <td data-sort-value="1608114345343">December 16, 2020</td>
        //         </tr>

        //       </uswds-table>


        //     </div>



      }
    },
    {
      "name": "Breadcrumb",
      "hash": "breadcrumb",
      "content": () => {

        const component: SandboxComponentItem = {
          componentName: 'Breadcrumb',
          componentDesc: 'USWDS Breadcrumb',
          props: {
            'Breadcrumb Properties': {props: [
              { name: 'breadcrumbs', type: 'BreadcrumbItem[]', default: '[]', description: 'list of breadcrumb items to display' }
            ]},
          },
          code: [
            {
              code: `<uswds-breadcrumb></uswds-breadcrumb>`, language: 'html', accordionHeader: 'Breadcrumb Example'
            },
            {
              code: `export interface BreadcrumbItem{
                label: string;
                href: string;
                current: boolean;
            }`, language: 'javascript', accordionHeader: 'BreadcrumbItem Interface'
            }

          ]
        }


        const basic = [
          { current: false, href: "", label: "Home" },
          { current: false, href: "", label: "Federal Contracting" },
          { current: false, href: "", label: "Contracting assistance programs" },
          { current: true, href: "", label: "Women-owned small business federal contracting program" }]

          return <sandbox-component component={component}>

            <uswds-breadcrumb slot="component" breadcrumbs={basic}></uswds-breadcrumb>

          </sandbox-component>
      }
    },
    {
      "name": "Button",
      "hash": "button",
      "content": () => {
        return <div>
          <h2>Button</h2>

          <p>USWDS Button</p>
          <uswds-button></uswds-button>
        </div>
      }
    },
    {
      "name": "Button group",
      "hash": "button-group",
      "content": () => <uswds-button-group></uswds-button-group>
    }

  ]

  @State() hash: string = window.location.hash.split("#")[1];

  @Listen('hashchange', { target: 'window' })
  onHashChange(event: any) {
    this.hash = window.location.hash.split("#")[1];
    // this.reloadUSWDS();
  }


  private reloadUSWDS() {

    const script = document.getElementById("uswds-script") as HTMLScriptElement;

    const newScript = document.createElement("script");

    newScript.src = script.src;
    newScript.defer = true;
    newScript.id = script.id;

    script.remove()

    document.head.appendChild(newScript)

  }

  render() {

    uswdsInitComponents();

    const component = this.Components.find((component) => component.hash === this.hash);

    if (!component) {
      // TODO: do something if no components found
    }


    return (
      <Host>

        <div class="sandbox-main-content-wrapper">
          <aside class="sidenav">
            <uswds-side-nav>

              <uswds-side-nav-item>
                <a href='' class={!this.hash ? 'usa-current' : null}>Welcome</a>
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


