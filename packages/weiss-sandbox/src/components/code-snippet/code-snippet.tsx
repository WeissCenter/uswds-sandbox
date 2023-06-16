import { Component, Host, Prop, h, Event, EventEmitter, State } from '@stencil/core';

declare let ace: any;

@Component({
  tag: 'code-snippet',
  styleUrl: 'code-snippet.css',
  shadow: false,
})
export class CodeSnippet {

  @Prop() language: string = "json";
  @Prop() code: string;
  @Prop() readonly: boolean = false;

  public id: string;


  @Event() onEditorChange: EventEmitter<any>;

  componentWillRender(){
    this.id = crypto.randomUUID();
  }


  componentDidRender(){
    const editor = ace.edit(this.id);
    editor.setTheme("ace/theme/chrome");
    editor.setReadOnly(this.readonly);
    editor.setShowPrintMargin(!this.readonly);
    editor.renderer.setShowGutter(!this.readonly);

    editor.session.setValue(this.code)

    switch(this.language){
      case 'json':{
        editor.session.setMode("ace/mode/json");
        break;
      }
      case 'javascript':{
        editor.session.setMode("ace/mode/javascript");
        break;
      }
      case 'html':{
        editor.session.setMode("ace/mode/html");
        break;
      }
    }


    editor.session.on('change', (delta) => this.onEditorChange.emit(delta))

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
          <div class="editor-wrapper">
            <div id={this.id} class="editor"> 
            </div>
          </div>
      </Host>
    );
  }

}
