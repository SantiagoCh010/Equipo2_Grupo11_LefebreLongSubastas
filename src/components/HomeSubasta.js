import MenuBusqueda from './MenuBusqueda';
import MenuCategoria from './MenuCategoria';
import NumPag from './NumPag';
import { useState } from 'react';

function HomeSubasta  () {
    
    const [lista_datos, setListaDatos ] = useState ([
        { id: "A21-001", categoria: "Camioneta Honda", valorPuja: "$34.500.000" },
        { id: "B21-001", categoria: "Bus", valorPuja: "$115.000.000" },
        { id: "C21-001", categoria: "Camión JAC", valorPuja: "$63.200.000" },
        { id: "C21-002", categoria: "Camión Chevrolet", valorPuja: "$79.000.000" },
        { id: "M21-001", categoria: "Moto Bajaj", valorPuja: "$4.100.000" },
        { id: "A21-002", categoria: "Spark GT", valorPuja: "$25.200.000" },
    ]);
 

    const crearSubasta = function (newSubasta) {
        const nuevaSubastas = [...lista_datos];
        nuevaSubastas.push(newSubasta);
        setListaDatos(nuevaSubastas);
    }

    const editarSubasta = function (newSubasta) {
        const nuevaSubastas = [...lista_datos];
        const subasta = nuevaSubastas.find( s => s.id === newSubasta.id );
        for (var attr in subasta) {
            subasta[attr] = newSubasta[attr];
        }
        setListaDatos(nuevaSubastas);   
    }

    
    const eliminarSubasta = function (id) {
        const nuevaSubastas = lista_datos.filter( (s) => s.id !== id );
        setListaDatos(nuevaSubastas);
    }

    return (
        <div>
            <MenuBusqueda  />
            <MenuCategoria subastas= { lista_datos } 
                            eliminarSubasta = { eliminarSubasta } 
                            crearSubasta = { crearSubasta }
                            editarSubasta = { editarSubasta } 
                            />
            <NumPag/>
        </div>
        
    )
}

export default HomeSubasta;
