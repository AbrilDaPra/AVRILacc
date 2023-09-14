import {useState, useEffect} from 'react';

const TextH2 = () => {

    const [text, setText] = useState("");

    const handleText = (event) => {
        setText(event.target.value);
    }

    useEffect( () => {
        console.log("Componente montado");

        return () => {
            console.log("Componente desmontado");
        }
    }, [] );

    useEffect( () => {
        console.log("Texto modificado");
    }, [text]);

  return (
    <div>
        <input type="text" onChange={handleText} />
        <h2>{text}</h2>
    </div>
  )
};

export default TextH2;