import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const sass = require('sass-embedded');
import {parse} from 'postcss-scss';


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    try{   

        if(!req.body){
            context.res = {
                headers: {   
                    'Access-Control-Allow-Origin': '*',
                  },
                status: 400,
                body: {success: false, err: 'missing body'}
            };
            return;
        }


        const compiled = await compileSASS(req.body)

        context.res = {
            headers: {   
                'Access-Control-Allow-Origin': '*',
              },
            // status: 200, /* Defaults to 200 */
            body: {success: true, data: compiled.css}
        };

    }catch(err){
        context.log("error!", err)
    }


};



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

    const prefix = process.env.AZURE_FUNCTIONS_ENVIRONMENT === 'Development' ? '../../' : '/home/site/wwwroot/';

    return sass.compileStringAsync(scss, {loadPaths: [`${prefix}node_modules/@uswds`, `${prefix}node_modules/@uswds/uswds/packages`, `${prefix}node_modules/@uswds/uswds/dist/theme`], style: 'compressed'})
}





export default httpTrigger;