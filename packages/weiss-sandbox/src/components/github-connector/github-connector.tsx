import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'github-connector',
  styleUrl: 'github-connector.css',
  shadow: true,
})
export class GithubConnector {

  @State() url: string = '';

  handleSubmit(e) {
    e.preventDefault()
  }


  handleChange(event){
    this.url = event.target.value
  }


  render() {
    return (
      <Host>
        <div class="github-connector">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label htmlFor="repo-search">
                Connect a github repo: 
              </label>
              <input placeholder='' value={this.url} onChange={(e) => this.handleChange(e)} type="text" />
            </form>
        </div>
      </Host>
    );
  }

}
