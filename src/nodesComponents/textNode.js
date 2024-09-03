import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 208, height: 128 }); // Initial dimensions

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    // Update dimensions based on content length
    const lines = newText.split('\n').length;
    const maxLength = Math.max(...newText.split('\n').map(line => line.length));
    setDimensions({
      width: Math.min(208 + maxLength * 7, 400), // Adjust width, cap at 400px
      height: Math.min(128 + lines * 20, 300), // Adjust height, cap at 300px
    });

    // Extract variables surrounded by {{ }} and create handles
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...newText.matchAll(regex)];
    const newHandles = matches.map(match => ({
      id: match[1],
      position: Position.Left,
      bgColor: 'yellow-500',
    }));
    console.log(newHandles);
    setHandles(newHandles);
  };

  return (
    <div
      className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 border-2 border-purple-700 rounded-lg shadow-xl text-white"
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <div className="font-bold text-lg mb-1">
        <span>Text Node</span>
      </div>
      <div className="space-y-2">
        <label className="flex flex-col text-sm">
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            className="mt-1 p-1 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            style={{ width: '100%', height: '100%', minHeight: '80px' }} // Make textarea resize automatically
          />
        </label>
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type="target"
          position={handle.position}
          id={`${id}-${handle.id}`}
          className={`w-3 h-3 bg-${handle.bgColor} border-2 border-black rounded-full`}
          style={{ top: `${20 + index * 20}px` }} // Position handles
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="w-3 h-3 bg-green-500 border-2 border-black rounded-full"
      />
    </div>
  );
};
