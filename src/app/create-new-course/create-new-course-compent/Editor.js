'use client'; // Required for Next.js App Router

import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css'; // Import the "snow" theme styles

// Dynamically import ReactQuill to prevent SSR errors
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const Editor = ({ value, onChange }) => {
  // Define the toolbar options similar to your image
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'link'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],,
      ['clean']
    ],
  };

  return (
    <ReactQuill 
      theme="snow" 
      value={value} 
      onChange={onChange} 
      modules={modules} 
    />
  );
};

export default Editor;