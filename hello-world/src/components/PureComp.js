import React, { PureComponent } from 'react'
import ParentComp from './ParentComp'
//the pure componnet implement shouldcomponentupdate with a shallow prop and state comparision
//it does a shallow comparison of prevstate with currstate and prevprops with currprops only when shallow comparision indicates there is a difference the components will rerender

/** Difference between the Pure And regular components are */
//Regular component - will not always implement shouldcomponentupdate it returns true by default.
//Pure component - implement shouldcomponentupdate with a shallow prop and state comparision
//Pure components will prevent unneccessary render on DOM which will boost performance
//never mutate the state.Always return a new object that reflects the new state

class PureComp extends PureComponent {
    render() {
        console.log('***************pure component render***********************')

        return (
            <div>
                Pure Component{this.props.name}
            </div>
        )
    }
}

export default PureComp
