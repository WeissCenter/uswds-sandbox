# USWDS Design Token Web Component Sandbox

This project serves as a sandbox for USWDS components as web components created using [stenciljs](https://stenciljs.com/). With the use of stenciljs we can export these web components into many other frameworks like Angular and React. 

[Live Demo](https://delightful-sea-0320c100f.3.azurestaticapps.net)


## Building the Application

### Required tools
- [stenciljs](https://stenciljs.com/)
- [Azure Function Core Tools](https://github.com/Azure/azure-functions-core-tools)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)


### Running the sandbox

This will start the sandbox on port 3333 and will automatically open the sandbox in your default browser
```
cd packages/weiss-sandbox
npm start
```

This step will start a local http server for the /api/uswdsCompile endpoint. The point of this function is to take an json of the design tokens for uswds, recompile the scss with the variables and return raw css to live update the site.
```
cd packages/weiss-sandbox-azure-api
npm start
```

### Building the sandbox

This will build the sandbox and output into the /www directory to be hosted wherever the user pleases.
```
cd packages/weiss-sandbox
npm build
```

Currently this step will also build the angular components and output them to the angular project in the packages/angular-workspace




TODO: 
- [X] Angular Component Output
- [ ] React Component Output



