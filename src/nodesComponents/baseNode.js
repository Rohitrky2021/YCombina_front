// baseNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, nodeType, handleType, handleOptions }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace('custom-', 'node_'));
  const [type, setType] = useState(data.type || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className={`w-52 h-45 p-4 bg-gradient-to-r from-${nodeType.bgColorStart} to-${nodeType.bgColorEnd} border-2 border-${nodeType.borderColor} rounded-lg shadow-xl text-white`}>
      <div className="font-bold mb-2 text-lg">
        <span>{nodeType.label}</span>
      </div>
      <div className="space-y-2">
        {nodeType.hasNameInput && (
          <label className="flex flex-col text-sm">
            Name:
            <input 
              type="text" 
              value={currName} 
              onChange={handleNameChange} 
              className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        )}
        {nodeType.hasTypeSelect && (
          <label className="flex flex-col text-sm">
            Type:
            <select 
              value={type} 
              onChange={handleTypeChange} 
              className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
              <option value="Image">Image</option>
            </select>
          </label>
        )}
      </div>
      {handleOptions.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          className={`w-3 h-3 bg-${handle.bgColor} border-2 border-white rounded-full`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
