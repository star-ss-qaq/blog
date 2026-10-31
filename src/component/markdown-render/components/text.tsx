import React from 'react';
import { Text } from 'mdast';

interface TextProps {
  item: Text;
}

const TextComponent: React.FC<TextProps> = ({ item }) => {
  return <span dangerouslySetInnerHTML={{ __html: item.value }} />;
};

export default TextComponent;
