import React from 'react';
import RenderList from '../render-list';
import { Link } from 'mdast';

interface LinkProps {
  item: Link;
}

const LinkComponent: React.FC<LinkProps> = ({ item }) => {
  return (
    <a href={item.url} target="_blank">
      <RenderList items={item.children} />
    </a>
  );
};

export default LinkComponent;
