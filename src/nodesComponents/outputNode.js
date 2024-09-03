// outputNode.js

import { BaseNode } from './baseNode';
import {  Position } from 'reactflow';

export const OutputNode = (props) => {
  const nodeType = {
    label: 'Output Node',
    bgColorStart: 'from-orange-400',
    bgColorEnd: 'to-pink-500',
    borderColor: 'orange-600',
    hasNameInput: true,
    hasTypeSelect: true,
  };

  const handleOptions = [
    { type: 'target', position: Position.Left, id: 'value', bgColor: 'purple-500' },
  ];

  return <BaseNode {...props} nodeType={nodeType} handleOptions={handleOptions} />;
};
