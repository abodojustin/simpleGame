import React from 'react'

export default function Block({entierObjet,tuileIsclicked=false}) {
    return (
        <div style={{backgroundColor:entierObjet.backgroundColor}} className={tuileIsclicked ? "block-active" : "block"}>
                {entierObjet.title}
        </div>
    )
}
