import { Component, Host, Prop, h } from '@stencil/core';

declare let ace: any;

@Component({
  tag: 'design-token-management',
  styleUrl: 'design-token-management.css',
  shadow: false,
})
export class DesignTokenManagement {
  
  public json: string = `{
  "testing": "testing"
}
  `
  

  componentWillLoad(){

    fetch("/assets/tokens/default.json")
    .then((res) => res.text())
    .then((result) => this.json = result)


  }



  render() {

    return (
      <Host>
        <div class="design-token-management-content">
          <h2>Design Token Management</h2>
          <p>Here you can modify the default design tokens for the sandbox and see real time updates to the styling based on the tokens!</p>

          <code-snippet code={this.json} readonly={true}></code-snippet>

        </div>
      </Host>
    );
  }

}
