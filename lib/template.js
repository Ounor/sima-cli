
module.exports = {
    componentTemplate: (componentName, componentDescription, componentParams, componentExt) => {

    const isConnect = componentExt.includes('connect')
      let paramsArray = []
      if (componentParams) {
          paramsArray = componentParams.split(',')
      }

        return `
// @flow
import React, {PureComponent} from 'react'

type Props = {
  ${
    paramsArray
    ? paramsArray.map((item, i) => `
    ${item}`).join('')
    : ''
  }
}

type ConnectionProps = {}

type DispatchProps = {}

type State = {}

/**
 * @description
 * ${componentDescription? componentDescription: 'Описание'} - ${componentDescription}
 ${
paramsArray
? paramsArray.map((item, i) => `
* @param ${item} [] -`).join('')
: ''    
}
*/

class ${componentName} extends PureComponent<Props & ConnectionProps & DispatchProps, State> {

  state = {}

  componentDidMount () {}

  componentDidUpdate (prevProps: Props & ConnectionProps) {}

  componentWillUnmount () {}


  render () {
    return <Text>${componentName}</Text> 
  }
}

const mapStateToProps = (state) => ({}: ConnectionProps)

const mapDispatchToProps = (dispatch: Dispatch) => ({}: DispatchProps)

export default ${isConnect
  ? `connect(mapStateToProps, mapDispatchToProps)(${componentName})`
  : componentName
}
}
`
},
styleTemplate: () => `
// @flow

import {StyleSheet, Platform, PixelRatio} from 'react-native'
import {Colors, Fonts} from '../../Themes'

  export default StyleSheet.create({})
`
}