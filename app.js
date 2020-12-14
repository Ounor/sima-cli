#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const minimist = require('minimist')

const args = minimist(process.argv)
let paramsArray = []
let params = ''

const component = {
    componentPath: '',
    componentName :'',
    format: 'js'
}

if (args.f) {
    component.componentPath = 'App/Fixtures/Block'
    component.componentName = args.f
    component.format = 'json'
    component.componentCode = `{
    "items": {

    }
}`
} else if (args.c) {
// создание файла стилей
    const styleCode = `
// @flow

import {StyleSheet, Platform, PixelRatio} from 'react-native'
import {Colors, Fonts} from '../../Themes'

    export default StyleSheet.create({})`;

    if (path.resolve('App/Component/Styles')) {
        fs.writeFileSync(path.resolve('App/Component/Styles', `${args.c}Styles.js`), styleCode);
    }
    if (args.p) {
        params = args.p
        paramsArray = params.split(',')
    }
    component.componentPath = 'App/Component/'
    component.componentParams = args.p
    component.componentName = args.c
    component.componentCode = `// @flow
import React, {PureComponent} from 'react'

type RouteActions = {
  navigateTo: string,
  navigateParams: {
    itemId: number
  }
}

type Props = {
}

type ConnectionProps = {
}

type DispatchProps = {
}

type State = {
}

/**
 * @description
 * ${args.d ? args.d : 'Описание'} - ${args.c}
 ${
    paramsArray
    ? paramsArray.map((item, i) => `
* @param ${item} [] -`).join('')
    : ''    
 }
 */

class ${component.componentName} extends PureComponent<Props & ConnectionProps & DispatchProps, State> {
  state = {
  }

  componentDidMount () {
  }

  componentDidUpdate (prevProps: Props & ConnectionProps) {
  }

  componentWillUnmount () {
  }


  render () {
    return <Text>${component.componentName}</Text> 
  }
}

const mapStateToProps = (state) => ({
}: ConnectionProps)

const mapDispatchToProps = (dispatch: Dispatch) => ({
}: DispatchProps)

export default connect(mapStateToProps, mapDispatchToProps)(${component.componentName})
`;
} else {
    console.log('Error argument', args)
    return
}

const srcPath = [__dirname]
const componentPath = [...srcPath, component.componentPath]

fs.writeFileSync(path.resolve(...componentPath, `${component.componentName}.${component.format}`), component.componentCode);


console.log('Ready')