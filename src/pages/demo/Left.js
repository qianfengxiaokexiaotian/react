import React from 'react';
import Child from './Child';
import './index.less'
export default class Left extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleAdd() {
        this.setState({
            count: this.state.count - 1
        })
    }
    handleAddList = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    NUm(){
        this.setState({
            count:this.state.count+2
        })
    }
    render() {
        let style = {
            padding: 50
        }
        return (
            <div>
                <p className="count">生命周期</p>
                <button onClick={this.handleAdd.bind(this)}>点击一下</button>
                <button onClick={this.handleAddList}>点击一下</button>
                <button onClick={this.NUm.bind(this)}>num</button>
                <p>{this.state.count}</p>
                <Child></Child>
            </div>
        )
    }

}