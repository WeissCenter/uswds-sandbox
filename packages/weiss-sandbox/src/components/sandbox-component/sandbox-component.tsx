import { Component, Host, Prop, h } from '@stencil/core';
import { SandboxComponentItem, SandboxComponentProperty } from '../../model/SandboxComponent';

@Component({
  tag: 'sandbox-component',
  styleUrl: 'sandbox-component.css',
  shadow: false,
})
export class SandboxComponent {

  @Prop() component: SandboxComponentItem;

  private renderTable(name: string, description: string, props: SandboxComponentProperty[]){

    return <div class="component-properties">
  
    <h4>{name}</h4>

    <p>{description}</p>

    <uswds-table>
      <tr slot="header">
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th scope="col">Default</th>
        <th scope="col">Description</th>
      </tr>

      {props.map((prop) => <tr slot="body">
        <th scope="row">{prop.name}</th>
        <td>
          {prop.type}
        </td>
        <td>{prop.default}</td>
        <td>{prop.description}</td>
      </tr>)}

    </uswds-table>
  </div> 

  }

  private renderProps(){

    if(Array.isArray(this.component.props) && this.component.props.length){

      return this.renderTable(this.component.componentName + " Properties", 'Defines the input properties of the component.', this.component.props)

    }


    const names = Object.keys(this.component.props);

    return names.map((name) => this.renderTable(name, this.component.props[name].description || 'Defines the input properties of the component.', this.component.props[name].props))

  }


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


          {this.renderProps()}





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
