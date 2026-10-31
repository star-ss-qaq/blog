import React from 'react';
import { Code } from 'mdast';

interface CodeProps {
  item: Code;
}

const CodeComponent: React.FC<CodeProps> = ({ item }) => {
  // Note: The original implementation used @tanstack/highlight, which is complex to replicate 
  // without a full build environment setup (like Vite/Webpack). For this conversion, 
  // we will render the code as pre-formatted text.
  return (
    <pre style={{ whiteSpace: 'pre', backgroundColor: 'rgba(0, 0, 0, 0.6)', paddingLeft: '40px', overflowX: 'auto', lineHeight: '20px', color: '#c9d1d9' }}>
      <code>{item.value}</code>
    </pre>
  );
};

export default CodeComponent;
