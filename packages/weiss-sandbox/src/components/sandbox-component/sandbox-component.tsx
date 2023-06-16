import { Component, Host, Prop, h } from '@stencil/core';
import { SandboxComponentItem } from '../../model/SandboxComponent';

@Component({
  tag: 'sandbox-component',
  styleUrl: 'sandbox-component.css',
  shadow: false,
})
export class SandboxComponent {

  @Prop() component: SandboxComponentItem;

  render() {
    return (
      <Host>

        <div class="component-content">
          <h2>{this.component.componentName}</h2>
          <p>{this.component.componentDesc}</p>

          <uswds-accordion accordionType='bordered'>
              <uswds-accordion-item header={this.component.componentName + " " + "Component Preview"}>
              <slot name="component"></slot>
              </uswds-accordion-item>
            </uswds-accordion>

    

          <h3>Implementation</h3>




          {this.component.props.length ?

            <div class="component-properties">

              <h4>{this.component.componentName} Properties</h4>

              <p>Defines the input properties of the component.</p>

              <uswds-table>
                <tr slot="header">
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Default</th>
                  <th scope="col">Description</th>
                </tr>

                {this.component.props.map((prop) => <tr slot="body">
                  <th scope="row">{prop.name}</th>
                  <td>
                    {prop.type}
                  </td>
                  <td>{prop.default}</td>
                  <td>{prop.description}</td>
                </tr>)}

              </uswds-table>
            </div>

            : ''}




          {this.component.code.map((code) =>

            <uswds-accordion accordionType='bordered'>
              <uswds-accordion-item header={code.accordionHeader}>
                <code-snippet readonly={true} language={code.language} code={code.code} ></code-snippet>
              </uswds-accordion-item>
            </uswds-accordion>

          )}
        </div>


      </Host>
    );
  }

}
