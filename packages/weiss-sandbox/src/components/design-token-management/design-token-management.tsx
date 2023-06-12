import { Component, Host, Prop, h } from '@stencil/core';

declare let ace: any;

@Component({
  tag: 'design-token-management',
  styleUrl: 'design-token-management.css',
  shadow: false,
})
export class DesignTokenManagement {
  
  @Prop() json: string = `{
      "dome": "dome"
    }
  `


  componentDidLoad(){
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");

    editor.session.on('change', (delta) => console.log(delta))

    editor.commands.addCommand({
      name: 'save',
      bindKey: {win: "Ctrl-S", "mac": "Cmd-S"},
      exec: function(editor) {
          console.log("saving", editor.session.getValue())
      }
  })

  }
  

  render() {

    return (
      <Host>
        <div class="design-token-management-content">
          <h2>Design Token Management</h2>
          <p>Here you can modify the default design tokens for the sandbox and see real time updates to the styling based on the tokens!</p>
          <div class="editor-wrapper">
            <div id="editor" class="editor"> 
              {this.json}
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
