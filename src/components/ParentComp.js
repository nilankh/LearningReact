// import React, { Component, PureComponent } from 'react'
import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
// class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nilank'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Nilank'
            })
        }, 2000)
    }
    render() {
        console.log('*********Parent Comp Render******************')
        return (
            <div>
                Parent Component 
                <MemoComp name={this.state.name}/>
                {/* <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />  */}
            
            </div>
        )
    }
}

export default ParentComp
