import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions, DeserializeEvent } from '@projectstorm/react-canvas-core';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
	color?: string;
	data: { id: string; ip: string; type: string };
}

export class TSCustomNodeModel extends NodeModel {
	color: string;

	constructor(options: TSCustomNodeModelOptions = { data: {id:"", ip: "", type: ""} }) {
		super({
			...options,
			type: 'ts-custom-node'
		});
		this.color = options.color || 'red';

		// setup an in and out port
		this.addPort(
			new DefaultPortModel({
				in: true,
				name: 'in'
			})
		);
		this.addPort(
			new DefaultPortModel({
				in: false,
				name: 'out'
			})
		);
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}

	deserialize(event: DeserializeEvent<this>): void {
		super.deserialize(event);
		this.color = event.data.color;
	}
}
