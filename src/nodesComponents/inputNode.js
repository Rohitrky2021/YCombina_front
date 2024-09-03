// inputNode.js

import { BaseNode } from './baseNode';
import {  Position } from 'reactflow';

export const InputNode = (props) => {
  const nodeType = {
    label: 'Input Node',
    bgColorStart: 'blue-500',
    bgColorEnd: 'purple-600',
    borderColor: 'blue-700',
    hasNameInput: true,
    hasTypeSelect: true,
  };

  const handleOptions = [
    { type: 'source', position: Position.Right, id: 'value', bgColor: 'green-500' },
  ];

  return <BaseNode {...props} nodeType={nodeType} handleOptions={handleOptions} />;
};
