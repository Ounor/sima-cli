const fs = require("fs");
const resolve = require("resolve");
const template = require('./template');


module.exports = {
    init: (a) => createFile(a)
}

createFile = ({componentName = 'TemplateComponent', componentParams, componentDescription = 'TemplateComponent', componentPath = ''} ) => {
   console.log(componentPath);
    if (componentName && !componentPath) {
        fs.appendFile(`./App/Components/${componentName}.js`, template.componentTemplate(
            componentName,
            componentPath,
            componentDescription,
            componentParams), (e) => {
            console.log(e)
        })
        fs.appendFile(`./App/Components/Styles/${componentName}Styles.js`, template.styleTemplate(), (e) => {
            console.log(e)
        });
    } else if (componentPath) {
        fs.appendFile(`./App/Components/${componentPath}/${componentName}.js`, template.componentTemplate(
            componentName,
            componentPath,
            componentDescription,
            componentParams
        ), (e) => {
            console.log(componentPath, componentName)
        })
    }
}


// if (args.f) {
//     component.componentPath = 'App/Fixtures/Block'
//     component.componentName = args.f
//     component.format = 'json'
//     component.componentCode = `{
//     "items": {

//     }
// }`
// } else
//  if (args.c) {
// // создание файла стилей
//     const styleCode = `
// // @flow

// import {StyleSheet, Platform, PixelRatio} from 'react-native'
// import {Colors, Fonts} from '../../Themes'

//     export default StyleSheet.create({})`;

//     if (resolve('App/Components/Styles')) {
//         writeFileSync(resolve('App/Components/Styles', `${args.c}Styles.js`), styleCode);
//     }
    // if (args.p) {
    //     params = args.p
    //     paramsArray = params.split(',')
    // }
//     component.componentPath = 'App/Components/'
//     component.componentParams = args.p
//     component.componentName = args.c
//     component.componentCode = `
// `;
// } else {
//     console.log('Check arguments use "-c ClassName -p params,and,more,params -d "description in double quotes" " ')
// }

// if (component.componentName) {  
//   writeFileSync(resolve(component.componentPath, `${component.componentName}.${component.format}`), component.componentCode);
//   console.log('Created')
// }

