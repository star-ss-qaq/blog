import React from 'react';
import { Node } from 'mdast';

interface UnknownItemProps {
  item: Node;
}

const UnknownItem: React.FC<UnknownItemProps> = ({ item }) => {
  console.warn("unknown markdown", item);
  return <span>unknown item {item.type}</span>;
};

export default UnknownItem;
