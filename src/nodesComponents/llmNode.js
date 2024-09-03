// llmNode.js

import { BaseNode } from './baseNode';
import {  Position } from 'reactflow';

export const LLMNode = (props) => {
  const nodeType = {
    label: 'LLM Node',
    bgColorStart: 'from-green-400',
    bgColorEnd: 'to-teal-600',
    borderColor: 'green-700',
    hasNameInput: false,
    hasTypeSelect: false,
  };

  const handleOptions = [
    { type: 'target', position: Position.Left, id: 'system', bgColor: 'yellow-400', style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: 'prompt', bgColor: 'red-400', style: { top: '67%' } },
    { type: 'source', position: Position.Right, id: 'response', bgColor: 'blue-500' },
  ];

  return <BaseNode {...props} nodeType={nodeType} handleOptions={handleOptions} />;
};
