import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentWillMount() {
        console.log('will mount')
    }
    componentDidMount() {
        console.log('did mount')
    }
    componentWillReceiveProps(newProps) {
        console.log('will props' + newProps.name)
    }
    shouldComponentUpdata() {
        console.log('should updata')
        return true
    }
    componentDidUpdata(){
        console.log('did updata')
    }
    render() {
        let style = {
            padding: 50
        }
        return (
            <div>
                <p>这里是子组件</p>
                <p>{this.props.name}</p>
            </div>
        )
    }

}