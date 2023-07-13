import React from "react";
import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
})

const TextEditor = () => {
    return (
        <div>
            <ReactQuill />
        </div>
    );
};
export default TextEditor;



