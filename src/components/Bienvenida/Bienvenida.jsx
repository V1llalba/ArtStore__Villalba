import React from 'react'

import carrusel from '../../img/carrusel.png'
import carrusel2 from '../../img/carrusel2.png'
import carrusel3 from '../../img/carrusel3.png'
import carrusel4 from '../../img/carrusel4.png'
import carrusel5 from '../../img/carrusel5.png'
import carrusel6 from '../../img/carrusel6.png'
import carrusel7 from '../../img/carrusel7.png'
import carrusel8 from '../../img/carrusel8.png'
import carrusel9 from '../../img/carrusel9.png'
import carrusel10 from '../../img/carrusel10.png'

import './Bienvenida.css'

function Bienvenida() {
    return (
        <div>
            <div className="div1"></div>
 
            <div className="contH1">
                <h1 className="titulo">Te damos la bienvenida a <span className="inicialA">A</span>rt Store!</h1>
            </div>

            <div className="contParrafo">
                <p className="parrafoBienvenida"> Somos una tienda de cuadros artsticos, obras unicas, coleccionables.</p>
            </div> 

            <div className="muestras">
                <h2 className="muestrasH2"><span className="inicialMuestras">M</span>uestras</h2>
            </div>

            <div class="contenedorGeneralCarrusel">
                <div class="contenedorCarrusel">
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel }/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel2}/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel3}/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel4} height="200px"/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel5}/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel6}/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel7} height="200px"/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel8}/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel9} height="200px"/></figure>
                    <figure className="contImg"><img className="imgCarrusel" src={carrusel10}/></figure>
                </div>
            </div>
            <div className="div2"></div>

            <div className="contParrafo2">
                <p className="parrafo2">~ Segui navegando para descubrir nuevas obras con sus estilos de pintura ~</p>
            </div>  
        </div>
    )
}

export default Bienvenida

