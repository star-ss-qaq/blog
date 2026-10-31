import React from 'react';
import { Image } from 'mdast';

interface ImageProps {
  item: Image;
}

const ImageComponent: React.FC<ImageProps> = ({ item }) => {
  return <img src={item.url} alt={item.alt || ''} />;
};

export default ImageComponent;
