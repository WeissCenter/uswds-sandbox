import { Component, Host, Prop, State, h } from '@stencil/core';

declare let ace: any;

@Component({
  tag: 'design-token-management',
  styleUrl: 'design-token-management.css',
  shadow: false,
})
export class DesignTokenManagement {
  
  public json: string = localStorage.getItem("designTokens") ? localStorage.getItem("designTokens") : `{"$theme-color-primary": "blue-60"}`

  @State() public compiling = false;
  


  onSave(event){

    localStorage.setItem("designTokens", event.detail)

    this.compiling = true;

    const url = window.location.hostname === 'localhost' ? 'http://localhost:7071/api/uswdsCompile' : '/api/uswdsCompile'

    fetch(url, {method: 'POST', body: event.detail, headers: {'Content-Type': 'application/json'}})
    .then((res) => res.json())
    .then((res) => {
      this.compiling = false;

      // find existing style

      const existing = document.getElementById('edited-scss');

      const style = existing ? existing :  document.createElement("style");

      style.innerHTML = res.data;
      style.id = 'edited-scss'


      document.head.appendChild(style)


      
    })
  }



  render() {

    return (
      <Host>
        <div class="design-token-management-content">
          <h2>Design Token Management</h2>
          <p>Here you can modify the default design tokens for the sandbox and see real time updates to the styling based on the tokens!</p>

          {
            this.compiling ?           <div class="token-management-compiling">
            <h3>Compiling....</h3>
          </div> : ''
          }

          <code-snippet  onSave={(event) => this.onSave(event)} code={this.json} readonly={false}></code-snippet>

        </div>
      </Host>
    );
  }

}
