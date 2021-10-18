import React from 'react'

export default function Number({entierObjet}) {
    console.log(entierObjet)
    return (
        <div className="num-title mx-3 my-2" style={{ backgroundColor: entierObjet.backgroundColor}}>
            {entierObjet.title}
        </div>
    )
}
