// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div className="w-52 h-32 p-4 bg-gradient-to-r from-green-400 to-teal-600 border-2 border-green-700 rounded-lg shadow-xl text-white relative">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: '33%' }}
        className="w-3 h-3 bg-yellow-400 border-2 border-white rounded-full"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: '67%' }}
        className="w-3 h-3 bg-red-400 border-2 border-white rounded-full"
      />
      <div className="font-bold text-lg mb-1">
        <span>LLM Node</span>
      </div>
      <div className="text-sm">
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="w-3 h-3 bg-blue-500 border-2 border-white rounded-full"
      />
    </div>
  );
}
