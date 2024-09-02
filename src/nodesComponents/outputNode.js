// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="w-52 h-45 p-4 bg-gradient-to-r from-orange-400 to-pink-500 border-2 border-orange-600 rounded-lg shadow-xl text-white">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="w-3 h-3 bg-purple-500 border-2 border-white rounded-full"
      />
      <div className="font-bold text-lg mb-1">
        <span>Output Node</span>
      </div>
      <div className="space-y-2">
        <label className="flex flex-col text-sm">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </label>
        <label className="flex flex-col text-sm">
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange} 
            className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
