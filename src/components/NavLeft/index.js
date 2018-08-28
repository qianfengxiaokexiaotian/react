import React from 'react'
import MenuConfig from './../../config/menuConfig'
import { Menu, Icon, Switch } from 'antd';
import './index.less'
const SubMenu = Menu.SubMenu;
 class NavLeft extends React.Component{
 	componentWillMount(){
 		const menuTreeNode = this.renderMenu(MenuConfig)
 		this.setState({
 			menuTreeNode
 		})
 	}
 	//菜單渲染
 	renderMenu=(data)=>{
 		return data.map((item)=>{
 			if(item.children){
// 				this.renderMenu(item.children)
                 return(
                 	<SubMenu title={item.title} key={item.key}>
                 	{this.renderMenu(item.children)}
                 	</SubMenu>
                 )
 			}
 			return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
 		})
 	}
	render(){
		return(
			<div className="NavLeft">
			  <div className="logo">
			     <img src="/assets/logo-ant.svg" alt=""/>
			     <h1>imooc MS</h1>
			  </div>
			  <Menu theme="dark">
		          {this.state.menuTreeNode}
		        </Menu>
			</div>
		)
	}
}

export default NavLeft