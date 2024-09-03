// newNode.js

import { BaseNode } from './baseNode';
import {Position } from 'reactflow';

export const NewNode = (props) => {
  const nodeType = {
    label: 'New Node',
    bgColorStart: 'red-500',
    bgColorEnd: 'yellow-600',
    borderColor: 'red-700',
    hasNameInput: true,
    hasTypeSelect: true,
  };

  const handleOptions = [
    { type: 'source', position: Position.Right, id: 'output', bgColor: 'blue-500' },
    { type: 'target', position: Position.Left, id: 'input', bgColor: 'yellow-500' },
  ];

  return <BaseNode {...props} nodeType={nodeType} handleOptions={handleOptions} />;
};
