// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="w-52 h-45 p-4 bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-blue-700 rounded-lg shadow-xl text-white">
      <div className="font-bold mb-2 text-lg">
        <span>Input Node</span>
      </div>
      <div className="space-y-2">
        <label className="flex flex-col text-sm">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label className="flex flex-col text-sm">
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange} 
            className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"
      />
    </div>
  );
}
