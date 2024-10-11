import React from 'react'
import ReactDOM from 'react-dom/client'

const element=ReactDOM.createRoot(document.getElementById("element"));

const Head1=()=>{
    return(
        
        <div>
            {heading2}
            <h1>This is Heading</h1>
            <h2>Heading 2</h2>
        </div>
    );
};

const heading2=(
    <h1 id="title" key="h2">
        Namasthe React
    </h1>
)

element.render(<Head1/>);