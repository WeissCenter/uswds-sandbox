import { h } from "@stencil/core"
import { SandboxComponentItem } from "./SandboxComponent"

export const Components = [
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
          }`, language: 'html', accordionHeader: 'HeaderNavItem Model'
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

      const code = `<uswds-side-nav>
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
      </uswds-side-nav>`


      return <div>

        <h2>Side Navigation</h2>

        <p>USWDS Side Navigation</p>

        <h3>Basic Sidenav</h3>


        <uswds-side-nav>
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

        <h3>Implementation</h3>


        <uswds-accordion accordionType='bordered'>
          <uswds-accordion-item header='Side Navigation Example'>
            <code-snippet readonly={true} language="html" code={code} ></code-snippet>
          </uswds-accordion-item>
        </uswds-accordion>





      </div>
    }
  },
  {
    'name': 'Accordion',
    'hash': 'accordion',
    'content': () => {


      const code = `<uswds-accordion>
          <uswds-accordion-item header='Header'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
</uswds-accordion>`

      return <div>

        <h2>Accordion</h2>

        <p>USWDS Accordion</p>

        <h3>Borderless Accordion</h3>

        <uswds-accordion>
          <uswds-accordion-item header="Test 1" expanded={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
          <uswds-accordion-item header="Test 2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
        </uswds-accordion>

        <h3>Bordered Accordion</h3>

        <uswds-accordion accordion-type='bordered'>
          <uswds-accordion-item header="Bordered Test 1" expanded={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
          <uswds-accordion-item header="Bordered Test 2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
        </uswds-accordion>

        <h3>Multiselectable Accordion</h3>

        <uswds-accordion accordion-type='multiselectable'>
          <uswds-accordion-item header="Multi-selectable Test 1" expanded={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
          <uswds-accordion-item header="Multi-selectable Test 2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
        </uswds-accordion>


        <h3>Multiselectable Bordered Accordion</h3>

        <uswds-accordion accordion-type='multiselectable-bordered'>
          <uswds-accordion-item header="Multi-selectable Bordered Test 1" expanded={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
          <uswds-accordion-item header="Multi-selectable Bordered Test 2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis. In, praesentium iusto. Ullam placeat voluptas debitis culpa tempora! In rem, cupiditate reiciendis quibusdam maiores rerum atque aliquid corrupti sed!</p>
          </uswds-accordion-item>
        </uswds-accordion>

        <h3>Implementation</h3>

        <h4>Accordion Properties</h4>

        <p>Defines the input properties of the component.</p>

        <uswds-table>
          <tr slot="header">
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>

          <tr slot="body">
            <th scope="row">accordionType</th>
            <td>
              borderless | bordered | multiselectable | multiselectable-bordered
            </td>
            <td>borderless</td>
            <td>the type of accordion items to show</td>
          </tr>

        </uswds-table>

        <h4>Accordion Item Properties</h4>

        <p>Defines the input properties of the component.</p>

        <uswds-table>
          <tr slot="header">
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>

          <tr slot="body">
            <th scope="row">header</th>
            <td>
              string
            </td>
            <td>null</td>
            <td>Header of the accordion item</td>
          </tr>

          <tr slot="body">
            <th scope="row">expanded</th>
            <td>
              boolean
            </td>
            <td>false</td>
            <td>Whether the accordion item is expanded by default or not</td>
          </tr>
        </uswds-table>


        <uswds-accordion accordionType='bordered'>
          <uswds-accordion-item header='Accordion Example'>
            <code-snippet readonly={true} language="html" code={code} ></code-snippet>
          </uswds-accordion-item>
        </uswds-accordion>


      </div>
    }

  },
  {
    "name": "Table",
    "hash": "table",
    'content': () => {

      const borderlessCode = `<uswds-table>

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
      </uswds-table>`

      const borderedCode = `<uswds-table table-table="bordered">

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
    </uswds-table>`



      return <div>


        <h2>Table</h2>

        <p>USWDS Table</p>

        <h3>Borderless Table</h3>


        <uswds-table>

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

        <uswds-accordion accordionType='bordered'>
          <uswds-accordion-item header='Borderless Example'>
            <code-snippet readonly={true} language="html" code={borderlessCode} ></code-snippet>
          </uswds-accordion-item>
        </uswds-accordion>


        <h3>Bordered Table</h3>

        <uswds-table table-type="bordered">

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

        <uswds-accordion accordionType='bordered'>
          <uswds-accordion-item header='Bordered Example'>
            <code-snippet readonly={true} language="html" code={borderedCode} ></code-snippet>
          </uswds-accordion-item>
        </uswds-accordion>


        <h3>Sortable Table</h3>



        <uswds-table table-type="bordered">

          <tr slot="header">
            <th data-sortable scope="col" role="columnheader">Alphabetical</th>
            <th data-sortable scope="col" role="columnheader">Month</th>
            <th data-sortable scope="col" role="columnheader">Percent</th>
            <th data-sortable scope="col" role="columnheader">Count</th>
            <th data-sortable scope="col" role="columnheader">Rank (Ordinal)</th>
            <th data-sortable scope="col" role="columnheader">Rank (Cardinal)</th>
            <th data-sortable scope="col" role="columnheader">Unix Timestamp</th>
          </tr>

          <tr slot="body">
            <th scope="row">Tango</th>
            <td data-sort-value="3">March</td>
            <td
              data-sort-value="0.206"
              class="font-mono-sm text-tabular text-right"
            >
              20.6%
            </td>
            <td
              data-sort-value="23612"
              class="font-mono-sm text-tabular text-right"
            >
              23,612
            </td>
            <td data-sort-value="3">Third</td>
            <td data-sort-value="3">3rd</td>
            <td data-sort-value="1332884673452">March 27, 2012</td>
          </tr>
          <tr slot="body">
            <th scope="row">Foxtrot</th>
            <td data-sort-value="4">April</td>
            <td
              data-sort-value="0.026"
              class="font-mono-sm text-tabular text-right"
            >
              2.6%
            </td>
            <td data-sort-value="-32" class="font-mono-sm text-tabular text-right">
              -32
            </td>
            <td data-sort-value="1">First</td>
            <td data-sort-value="1">1st</td>
            <td data-sort-value="1617974313232">April 9, 2021</td>
          </tr>
          <tr slot="body">
            <th scope="row">Hilo</th>
            <td data-sort-value="1">January</td>
            <td
              data-sort-value="-0.036"
              class="font-mono-sm text-tabular text-right"
            >
              -3.6%
            </td>
            <td
              data-sort-value="0.002"
              class="font-mono-sm text-tabular text-right"
            >
              0.002
            </td>
            <td data-sort-value="2">Second</td>
            <td>2nd</td>
            <td data-sort-value="1611169964684">January 20, 2021</td>
          </tr>
          <tr slot="body">
            <th scope="row">Bravo</th>
            <td data-sort-value="12">December</td>
            <td
              data-sort-value="-3.006"
              class="font-mono-sm text-tabular text-right"
            >
              -300.6%
            </td>
            <td data-sort-value="0" class="font-mono-sm text-tabular text-right">
              0
            </td>
            <td data-sort-value="4">Fourth</td>
            <td data-sort-value="4">4th</td>
            <td data-sort-value="1608114345343">December 16, 2020</td>
          </tr>

        </uswds-table>


      </div>



    }
  },
  {
    "name": "Breadcrumb",
    "hash": "breadcrumb",
    "content": () => {

      const code = '<uswds-breadcrumb></uswds-breadcrumb>'

      const breadcrumbItem = `export interface BreadcrumbItem{
          label: string;
          href: string;
          current: boolean;
      }`

      const basic = [
        { current: false, href: "", label: "Home" },
        { current: false, href: "", label: "Federal Contracting" },
        { current: false, href: "", label: "Contracting assistance programs" },
        { current: true, href: "", label: "Women-owned small business federal contracting program" }]

      return <div>

        <h2>Breadcrumb</h2>

        <p>USWDS Breadcrumb</p>

        <uswds-breadcrumb breadcrumbs={basic}></uswds-breadcrumb>


        <h3>Implementation</h3>

        <h4>Breadcrumb Properties</h4>

        <p>Defines the input properties of the component.</p>

        <uswds-table>
          <tr slot="header">
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>

          <tr slot="body">
            <th scope="row">breadcrumbs</th>
            <td>
              BreadcrumbItem[]
            </td>
            <td>[]</td>
            <td>List of breadcrumb items</td>
          </tr>

        </uswds-table>

        <uswds-accordion accordionType='bordered'>
          <uswds-accordion-item header='BreadcrumbItem'>
            <code-snippet readonly={true} language="typescript" code={breadcrumbItem} ></code-snippet>
          </uswds-accordion-item>
        </uswds-accordion>

        <br />

        <uswds-accordion accordionType='bordered'>
          <uswds-accordion-item header='Breadcrumb Example'>
            <code-snippet readonly={true} language="html" code={code} ></code-snippet>
          </uswds-accordion-item>
        </uswds-accordion>





      </div>



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