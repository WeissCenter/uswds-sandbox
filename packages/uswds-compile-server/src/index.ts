import express from 'express';
const sass = require('sass-embedded');
import cors from 'cors';


const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());

app.post('/compile', async (req, res) => {

    try{
        const compiled = await compileSASS(req.body);
        return res.json({success: true, data: compiled.css});
    }catch(err){
        console.log(err)
        res.status(500).json({success: false, err: JSON.stringify(err)})
    }

})



function compileSASS(variables: {[variable: string]: string}){
    const sassVars = Object.entries(variables).map(([key, value]) => `${key}: ${value}`);

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



app.listen(8080, () => console.log("USWDS Compile Server Running"))