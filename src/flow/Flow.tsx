import React from "react";
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";

const Flow = () => {
  // create an instance of the engine with all the defaults
  const engine = createEngine();

console.log(DefaultNodeModel)
  
  // node 1
  const node1 = new DefaultNodeModel({
    name: "Node 1",
    color: "rgb(0,192,255)",
  });
  node1.setPosition(100, 100);
  let port1 = node1.addOutPort("Out");

  // node 2
  const node2 = new DefaultNodeModel({
    name: "Node 1",
    color: "rgb(0,192,255)",
  });
  node2.setPosition(100, 100);
  let port2 = node2.addOutPort("Out");
  console.log(node1)

  const nodeArray = [node1, node2]

  const createNodes = () => {
    for (let i = 0; i < 1000; i++){
      const node = new DefaultNodeModel({
        name: "Node 1",
        color: "rgb(0,192,255)",
        
      });
      node.setPosition(Math.floor(Math.random() * (100 - 8000) + 8000), Math.floor(Math.random() * (100 - 8000) + 8000));
      let port1 = node.addInPort("In");
      let port2 = node.addOutPort("Out");
      let port3 = node.addOutPort("Out");
      let port4= node.addOutPort("Out");
      nodeArray.push(node)
    }
  }
  createNodes()
  // link them and add a label to the link
  const link = port1.link<DefaultLinkModel>(port2);
  link.addLabel("Hello World!");
  const model = new DiagramModel();
  model.addAll(...nodeArray, link);
  engine.setModel(model);

  return <CanvasWidget engine={engine} />;
};

export default Flow;
