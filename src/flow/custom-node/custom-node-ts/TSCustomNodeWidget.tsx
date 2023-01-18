import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSCustomNodeModel } from './TSCustomNodeModel';

import './customModule.css';

export interface TSCustomNodeWidgetProps {
	node: TSCustomNodeModel;
	engine: DiagramEngine;
}

export interface TSCustomNodeWidgetState {
	nodeOptions: any,
}

export class TSCustomNodeWidget extends React.Component<TSCustomNodeWidgetProps, TSCustomNodeWidgetState> {
	constructor(props: TSCustomNodeWidgetProps) {
		super(props);
		this.state = {
			nodeOptions: this.props.node.getOptions(),
		
		};
		
	}

	render() {
		return (
			<>
				<div className={`customModule`}>
					<aside className={`customModule__input-container`}>
						<div className={`customModule__input`}>
							<PortWidget engine={this.props.engine} port={this.props.node.getPort("in")!}>
								<div className="circle-port" />
							</PortWidget>
						</div>
					</aside>
					<main className={`customModule__info info`}>
						<div className="circle-container">
							<div className="circle circle--orange"></div>
							<div className="circle circle--red"></div>
							<div className="circle circle--green"></div>
						</div>
						<div className="info__text info__text--id">{this.state.nodeOptions.data.id}</div>
						<div className="info__text info__text--ip">10.10.10.1</div>
						<div className="info__text info__texy--type">sterownik prosty</div>
					</main>
					<aside className={`customModule__output-container`}>
						<div className="customModule__output">
							<PortWidget engine={this.props.engine} port={this.props.node.getPort("out")!}>
								<div className="circle-port" />
							</PortWidget>
						</div>
					</aside>
				</div>
			</>
		);
	}
}
