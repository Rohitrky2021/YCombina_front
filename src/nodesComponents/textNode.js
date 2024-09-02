// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="w-52 h-32 p-4 bg-gradient-to-r from-purple-500 to-indigo-600 border-2 border-purple-700 rounded-lg shadow-xl text-white">
      <div className="font-bold text-lg mb-1">
        <span>Text Node</span>
      </div>
      <div className="space-y-2">
        <label className="flex flex-col text-sm">
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
            className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"
      />
    </div>
  );
}
