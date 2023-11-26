import React from 'react';

export default function Card({ children, ...props }) {
  return (
    <div className={"p-4 bg-black text-white rounded shadow-lg hover:shadow-lg hover:bg-gray-900 transition-all duration-300 " + props.className}>
      {children}
    </div>
  );
}
 