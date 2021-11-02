import React from 'react';
import carrusel from './img/carrusel.png'
import carrusel2 from './img/carrusel2.png'
import carrusel3 from './img/carrusel3.png'
import carrusel4 from './img/carrusel4.png'
import carrusel5 from './img/carrusel5.png'
import carrusel6 from './img/carrusel6.png'
import carrusel7 from './img/carrusel7.png'
import carrusel8 from './img/carrusel8.png'
import carrusel9 from './img/carrusel9.png'
import carrusel10 from './img/carrusel10.png'
import paisaje1 from './img/paisajismo1.png'
import paisaje2 from './img/paisajismo2.png'
import paisaje3 from './img/paisajismo3.png'
import paisaje4 from './img/paisajismo4.png'

import street1 from './img/street1.png'
import street2 from './img/street2.png'
import street3 from './img/street3.png'
import street4 from './img/street4.png'

import retrato1 from './img/retrato1.png'
import retrato2 from './img/retrato2.png'
import retrato3 from './img/retrato3.png'
import retrato4 from './img/retrato4.png'


import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer() {
    
    return (
        <div>
            <div className="div1"></div>
            <div className="contH1">
                <h1 className="titulo">Te damos la bienvenida a <span className="inicialH1">A</span>rt Store!</h1>
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
                <p className="parrafo2">~ Segui bajando para descubrir nuevas obras con sus estilos de pintura ~</p>
            </div>

            {/* OBRAS */}
            
            <div className="contGeneralObras">
                <div className="contObras">
                    <h2 className="h2Obras"><span className="inicialMuestras">O</span>bras en venta</h2>       
                </div>
                
                <div className="contEstilos">
                    <h4 className="estilos"><span className="inicialMuestras">P</span>aisajismo</h4>
                </div>    

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={paisaje1} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Velvet evening</h5>
                                </div>
                                <p className="card-text">Cuando el sol comienza a descender, una calma sedosa y aterciopelada desciende con tonos brillantes en el cielo occidental.
                                Enmarcado en un marco de madera de hoja de plata de 3 ".</p>
                                <div className="contInfo">
                                <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Óleo en Lienzo</p>
                                <div className="contInfo">
                                <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">100x100cm</p>
                                <div className="contInfo">
                                <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>
                                <div className="contInfo">
                                <h5 className="h5Info">Precio</h5>
                               </div>
                                <p className="info">631.200 ARS</p>
                                <div className="hola">
                                    <ItemCount initial={0} stock={2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={paisaje2} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Despertar de luz</h5>
                                </div>
                                <p className="card-text">La luz sobre el movimiento de las hojas recreando todo el otoño y tu imaginacion volando con ellas , danzando y disfrutando esos momentos maravillosos.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Acrílico en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">120x150cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">948.000 ARS</p>

                                <ItemCount initial={0} stock={2} />
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={paisaje3} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">The Adversity isnt so fierce as hes painted</h5>
                                </div>
                                <p className="card-text">La "Adversidad" no es como la pintan... buque encallado, devastado, en absoluta degradación inmerso en un crepúsculo donde no es claro si es el amanecer ó anochecer, me habla de la condición humana que vivimos actualmente.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Óleo en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">60x80.5cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">331.400 ARS</p>

                                <ItemCount initial={0} stock={2} />
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={paisaje4} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">The LOOP - Chicago</h5>
                                </div>
                                <p className="card-text">El Chicago Loop Skytrain te sumerge en esta fascinante ciudad cargada de historia, desde Al Capone hasta la innovación arquitectónica de sus rascacielos. Pintado en acrílico sobre madera de nogal, cuya veta aporta una dinámica natural, el sujeto se dibuja primero a lápiz antes de pintarlo solo con un pincel. Las rayas rojas se aplican inicialmente y luego se vuelven a pintar con gran detalle para crear una ilusión de transparencia.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Óleo en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">40x60cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">417.000 ARS</p>

                                <ItemCount initial={0} stock={2} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="contEstilos">
                    <h4 className="estilos"><span className="inicialMuestras">S</span>treet Art</h4>
                </div>

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={street1} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Motiv Dagobert Duck Never Never give up</h5>
                                </div>
                                <p className="card-text">El pato Dagobert se encuentra con la moda. KAPOW. Todos los elementos están pintados. Esta obra original fue estirada en 600 g de lino puro, por un reconocido comerciante de arte, sobre madera de abeto auténtico de alta calidad, con bastidor de camilla, incluidas perchas de metal, en la parte posterior.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Óleo, Gouache/aguada en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">130x130cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">608.600 ARS</p>

                                <ItemCount initial={0} stock={1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={street2} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Percepire l' Entità</h5>
                                </div>
                                <p className="card-text">Percibiendo la entidad
                                es una obra de 2019
                                representando un cosmos de objetos muy personales
                                que nos representan que me mueven dentro de este núcleo.
                                Con flechas que entran desde el exterior para ir a buscar o percibir la entidad.
                                Realizado con la técnica de pintura acrílica y para el efecto fluo utilicé un spray.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Acrílico, Graffiti en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">100x100cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">360.800 ARS</p>

                                <ItemCount initial={0} stock={2} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={street3} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Black Graffiti</h5>
                                </div>
                                <p className="card-text">Esta pintura de arte callejero es una obra original pintada a mano de Vincent Bardou.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Acrílico, Graffiti en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">80x120cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">293.200 ARS</p>

                                <ItemCount initial={0} stock={2} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={street4} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Gurlitt Graffiti</h5>
                                </div>
                                <p className="card-text">La pintura de pequeño formato muestra una pared con un grafiti. Está pintado con extrema atención al detalle y de la más alta calidad pictórica. La pintura está enmarcada por una tira de madera gris.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Óleo en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">40x50cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">157.800 ARS</p>

                                <ItemCount initial={0} stock={1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contEstilos">
                    <h4 className="estilos"><span className="inicialMuestras">R</span>etrato</h4>
                </div>

                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={retrato1} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">'A Token From Another World'</h5>
                                </div>
                                <p className="card-text">En esta divertida e inocente historia de Love, Afflick describe los avances realizados por un admirador oculto hacia una hermosa mujer que mira con simpatía su ofrenda. El hecho de que ella tenga alas y un halo, y que su ficha pase a través de un portal, sugiere que él considera su salida de su liga, de hecho, ¡de otro mundo!</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Óleo en Madera</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">41x51cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">331.400 ARS</p>

                                <ItemCount initial={0} stock={1} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={retrato2} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Black and white trend</h5>
                                </div>
                                <p className="card-text">La combinación de rayas blancas y negras siempre será un clásico en moda e interiorismo. Una pintura moderna y de moda en el estilo de "editorial de moda" complementará cualquier interior minimalista lacónico. La silueta de esta chica es muy dinámica, al igual que su personaje.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Óleo en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">130x130cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">315.600 ARS</p>

                                <ItemCount initial={0} stock={1} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={retrato3} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">Hommage a Jack Nicolson serie wanted / Jocker</h5>
                                </div>
                                <p className="card-text">Jack Nicolson, un ícono de la industria del cine, se destaca en la elección de sus roles .... Encarna a la perfección el papel de JOCKER en BATMAN ... Esta pintura es un HOMENAJE a este gran actor que hace estallar habitualmente las pantallas del cine durante más de 40 años, para nuestro gran placer El pintor François Poulat pone en escena a Jacques Nicolson frente a un cartel de Se Busca que representa al malvado Jocker, con un estilo BD POPART.</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Acrílico, Resina en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">120x120cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">563.600 ARS</p>

                                <ItemCount initial={0} stock={1} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-12" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={retrato4} className="img-fluid rounded-start"/>
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="contCardTitle">
                                    <h5 className="card-title">New toys</h5>
                                </div>
                                <p className="card-text">Pintura de mi popular serie Puppets. En él intento transmitir emociones y con la ayuda de símbolos transmito los sentimientos de las personas presentadas.
                                La imagen surrealista alude a nuestras emociones ... soledad, esperanza, amor ...</p>
                                <div className="contInfo">
                                    <h5 className="h5Info">Tecnica</h5>
                                </div>
                                <p className="info">Acrílico en Lienzo</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Dimensiones</h5>
                                </div>
                                <p className="info">50x40cm</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Envío</h5>
                                </div>
                                <p className="info">por transportistas especializados.</p>

                                <div className="contInfo">
                                    <h5 className="h5Info">Precio</h5>
                                </div>
                                <p className="info">210.600 ARS</p>

                                <ItemCount initial={0} stock={1} />
                            </div>
                        </div>
                    </div>
                </div>
















            </div>

            
        </div>
    )
}

export default ItemListContainer
