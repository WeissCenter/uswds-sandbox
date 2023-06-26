import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const sass = require('sass-embedded');
import {parse} from 'postcss-scss';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const compiled = await compileSASS({
        "$theme-color-primary": "\"red-50\""
    })
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: compiled.css
    };

};



function checkForErrors(variable: string){

    console.log("checking variable", variable)

    const scss = 
    `@use "uswds-core" with (
        $theme-show-notifications: false,
        $theme-show-compile-warnings: false,
        ${variable}
    );
    @forward "uswds-theme";
    @forward "uswds";
    `

    return sass.compileStringAsync(scss, {loadPaths: ['../node_modules/@uswds', './uswds/packages', './uswds/dist/theme'], style: 'compressed'})
}


async function compileSASS(variables: {[variable: string]: string}){
    const sassVars = Object.entries(variables).map(([key, value]) => `${key}: (${value})`);

    // await Promise.all(sassVars.map((vara) => checkForErrors(vara)))

    const scss = 
    `@use "uswds-core" with (
        $theme-show-notifications: false,
        $theme-show-compile-warnings: false,
        ${sassVars.join(",\n")}
    );
    @forward "uswds-theme";
    @forward "uswds";
    `

    return sass.compileStringAsync(scss, {loadPaths: ['../../node_modules/@uswds', '../../node_modules/@uswds/uswds/packages', '../../node_modules/@uswds/uswds/dist/theme'], style: 'compressed'})
}





export default httpTrigger;