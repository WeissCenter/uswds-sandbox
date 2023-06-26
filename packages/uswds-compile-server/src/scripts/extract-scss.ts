import { readFileSync, writeFileSync } from 'fs';
import {glob} from 'glob';
import {parse} from 'postcss-scss';

async function run(){


    const scssFiles = (await glob('../../node_modules/@uswds/**/*.scss'));

    let variables = {};

    for(const file of scssFiles){
        const scssFile = readFileSync(file, {encoding: 'utf-8'});

        const parsed = parse(scssFile)

        variables = {...variables, ...variablesFromScss(parsed)}

    }

    writeFileSync("tokens.json", JSON.stringify(variables, null, 2))




}

function variablesFromScss(scssRoot) {
    return scssRoot.nodes.filter((n) => n.type === "decl" && n.variable && n.prop.includes("$theme"))
    .reduce((accum, val) => Object.assign(accum, {[val.prop]: val.value.replace("!default", "").trim()}), {});
  }

run();