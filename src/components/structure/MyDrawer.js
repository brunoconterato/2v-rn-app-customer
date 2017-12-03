import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';

import ControlPanel from './ControlPanel';

export default class MyDrawer extends Component {
	_openControlPanel = () => {
		this.drawer.open();
	};

	_closeControlPanel = () => {
		this.drawer.close();
	};

	render() {
		const childrenWithProps = React.Children.map(this.props.children,
			(child) => React.cloneElement(child, {
				openControlPanel: this._openControlPanel
			})
		);

		return (
			<Drawer
				ref={ref => { this.drawer = ref; }}
				content={<ControlPanel />}
				openDrawerOffset={60}
				//Dim the View
				/* {tweenHandler={ratio => (
					{
						mainOverlay: {
							opacity: (3 / 4) * ratio,
							backgroundColor: 'black'
						}
					}
				)}} */
				type='displace'
				acceptPan //Aceitar movimento lateral para fechar
				acceptTap //Aceitar toque fora do Drawer para fechar
				panOpenMask={0.10} //Aceitar abrir drawer com movimento para direita
			>
				{childrenWithProps}
			</Drawer>
		);
	}
}

const drawerStyles = StyleSheet.create({
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: 'black'
  }
});
