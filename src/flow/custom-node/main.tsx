import * as React from "react";
// import { createRoot } from 'react-dom/client';
import "./main.css";
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";
import { TSCustomNodeFactory } from "./custom-node-ts/TSCustomNodeFactory";
import { TSCustomNodeModel } from "./custom-node-ts/TSCustomNodeModel";
import { BodyWidget } from "./BodyWidget";

export const Main = () => {
  // create an instance of the engine
  const engine = createEngine();

  // register the two engines
  engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());

  // create a diagram model
  const model = new DiagramModel();

  //####################################################
  // now create two nodes of each type, and connect them
  let id = 3;
  const nodesArray: any = [];
  const node1 = new TSCustomNodeModel({
    color: "rgb(192,255,0)",
    data: { id: "213123", ip: "10.30.20", type: "sterownik prosty" },
  });
  node1.setPosition(
    Math.floor(Math.random() * (100 - 8000) + 8000),
    Math.floor(Math.random() * (100 - 8000) + 8000)
  );

  const node2 = new TSCustomNodeModel({
    color: "rgb(0,192,255)",
    data: { id: "9999999999", ip: "10.30.20", type: "sterownik prosty" },
  });
  node2.setPosition(
    Math.floor(Math.random() * (100 - 8000) + 8000),
    Math.floor(Math.random() * (100 - 8000) + 8000)
  );

  const createNodes = () => {
    for (let i = 0; i < 1000; i++) {
      const node = new TSCustomNodeModel({
        color: "rgb(192,255,0)",
        data: { id: id.toString(), ip: "10.30.20", type: "sterownik prosty" },
      });
      node.setPosition(
        Math.floor(Math.random() * (100 - 12000) + 12000),
        Math.floor(Math.random() * (100 - 6000) + 6000)
	  );
      nodesArray.push(node);
      id++;
    }
  };
  createNodes();
  const link1 = new DefaultLinkModel();
  link1.setSourcePort(node1.getPort("out"));
  link1.setTargetPort(node2.getPort("in"));

  model.addAll(node1, node2, ...nodesArray);

  //####################################################

  // install the model into the engine
  engine.setModel(model);
  console.log(node1);
  return <BodyWidget engine={engine} />;
  // document.addEventListener('DOMContentLoaded', () => {
  // 	const root = createRoot(document.querySelector('#root'));
  // 	root.render(<BodyWidget engine={engine} />);
  // });
};
