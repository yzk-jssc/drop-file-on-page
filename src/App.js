import React, { useState } from "react";
import "./App.css";

function App() {
    const [drag, setDrag] = useState(false);

    const dragStartHandler =(e)=>{
        e.preventDefault()
        setDrag(true)

    }

    const dragLeaveHandler =(e)=>{
        e.preventDefault()
        setDrag(false)

    }

    const dropHandler =(e)=>{
        e.preventDefault();
        let files = [...e.dataTransfer.files]
        console.log(files)
        let formData = new FormData()
        formData.append('file',files[0]);

        //axios.post('url',formData,options)

        setDrag(false)
    }

    return (
        <div className="App">
            {drag ? (
                <div
                    className="drop-area"
                    onDragStart={(e) => dragStartHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragOver={(e) => dragStartHandler(e)}
                    onDrop={(e) => dropHandler(e)}
                >
                    Отпустите файл для загрузки
                </div>
            ) : (
                <div
                    onDragStart={(e) => dragStartHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragOver={(e) => dragStartHandler(e)}
                >
                    Перетащите файл для загрузки
                </div>
            )}
        </div>
    );
}

export default App;
