import React from 'react';
import RenderBlock from './render-block';
import { Node } from 'mdast';

interface RenderListProps {
  items: Node[];
}

const RenderList: React.FC<RenderListProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => <RenderBlock key={item.type} item={item} />)}
    </>
  );
};

export default RenderList;
