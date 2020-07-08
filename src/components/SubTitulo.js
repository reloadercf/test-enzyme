import React,{useState} from 'react';

function SubTitulo() {
    let [texto,setTexto]=useState({
        print:true,
        text:'Las habburguesas de don cangrejo'
    })
    let handleSetFalse=()=>{
        setTexto({...texto,print:false})
    }

    return (
        <div>
            {texto.print && <h2>{texto.text}</h2>}
            <button onClick={()=>handleSetFalse()}>Borrar hamburguesa</button>
        </div>
    );
}

export default SubTitulo;