import React from 'react';
import { Node } from 'mdast';
import { compMap } from './comp-map';
import UnknownItem from './unknown-item';

interface RenderBlockProps {
  item: Node;
}

const RenderBlock: React.FC<RenderBlockProps> = ({ item }) => {
  // Dynamically render the component based on the node type
  const ComponentToRender = compMap[item.type] || UnknownItem;

  return <ComponentToRender item={item} />;
};

export default RenderBlock;
