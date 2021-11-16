
const Productos = [
    {
        id: 1,
        titulo: "Velvet evening",
        descripcion: "Cuando el sol comienza a descender, una calma sedosa y aterciopelada desciende con tonos brillantes en el cielo occidental. Enmarcado en un marco de madera de hoja de plata de 3",
        precio: "631.200 ARS",
        categoria: "paisajismo",
        imagen:'https://i.ibb.co/kmj6bfg/paisajismo1.png'
    },
    {
        id: 2,
        titulo: "Despertar de luz",
        descripcion: "La luz sobre el movimiento de las hojas recreando todo el otoño y tu imaginacion volando con ellas , danzando y disfrutando esos momentos maravillosos.",
        precio: "948.000 ARS",
        categoria: "paisajismo",
        imagen:'https://i.ibb.co/kqMLrGQ/paisajismo2.png'
    },

    {
        id: 3,
        titulo: "The Adversity",
        descripcion: "La 'Adversidad' no es como la pintan... buque encallado, devastado, en absoluta degradación inmerso en un crepúsculo donde no es claro si es el amanecer ó anochecer, me habla de la condición humana que vivimos actualmente.",
        precio: "331.400 ARS",
        categoria: "paisajismo",
        imagen:'https://i.ibb.co/m5pVpJh/paisajismo3.png'
    },
    {
    id: 4,
    titulo: "Motiv Dagobert Duck",
    descripcion: "El pato Dagobert se encuentra con la moda. KAPOW. Todos loselementos están pintados. Esta obra original fue estirada en 600 g de lino puro,por un reconocido comerciante de arte, sobre madera de abeto auténtico de altacalidad, con bastidor de camilla, incluidas perchas de metal, en la parteposterior.",
    precio: "608.600 ARS",
    categoria: "street Art",
    imagen:'https://i.ibb.co/PxjP6s3/street1.png'
    },
    {
    id: 5,
    titulo: "Percepire l' Entità",
    descripcion: "Percibiendo la entidad es una obra de 2019 representando un cosmosde objetos muy personales que nos representan que me mueven dentro de estenúcleo. Con flechas que entran desde el exterior para ir a buscar o percibir laentidad. Realizado con la técnica de pintura acrílica y para el efecto fluoutilicé un spray",
    precio: "360.800 ARS",
    categoria: "street Art",
    imagen:'https://i.ibb.co/ZmnVpbM/street2.png'
    },

    {
    id: 6,
    titulo: "Black Graffiti",
    descripcion: "Esta pintura de arte callejero es una obra original pintada a manode Vincent Bardou.",
    precio: "293.200 ARS",
    categoria: "street Art",
    imagen:'https://i.ibb.co/3Yss9k8/street3.png'
    }, 
    {
    id: 7,
    titulo: "From Another World",
    descripcion: "En esta divertida e inocente historia de Love, Afflick describe los avances realizados por un admirador oculto hacia una hermosa mujer que mira con simpatía su ofrenda. El hecho de que ella tenga alas y un halo, y que su ficha pase a través de un portal, sugiere que él considera su salida de su liga, de hecho, ¡de otro mundo!",
    precio: "331.400 ARS",
    categoria: "retrato",
    imagen:'https://i.ibb.co/3S1hXr4/retrato1.png'
    }, 
    {
    id: 8,
    titulo: "Black and white trend",
    descripcion: "La combinación de rayas blancas y negras siempre será un clásico en moda e interiorismo. Una pintura moderna y de moda en el estilo de editorial de moda complementará cualquier interior minimalista lacónico. La silueta de esta chica es muy dinámica, al igual que su personaje.",
    precio: "315.600 ARS",
    categoria: "retrato",
    imagen:'https://i.ibb.co/N9rrCXk/retrato2.png'
    }, 
    {
    id: 9,
    titulo: "Hommage a Nicolson",
    descripcion: "Jack Nicolson, un ícono de la industria del cine, se destaca en la elección de sus roles .... Encarna a la perfección el papel de JOCKER en BATMAN ... Esta pintura es un HOMENAJE a este gran actor que hace estallar habitualmente las pantallas del cine durante más de 40 años, para nuestro gran placer El pintor François Poulat pone en escena a Jacques Nicolson frente a un cartel de Se Busca que representa al malvado Jocker, con un estilo BD POPART.",
    precio: "563.600 ARS",
    categoria: "retrato",
    imagen:'https://i.ibb.co/tmqDJfC/retrato3.png'
    }, 
]

export const getFech = new Promise ((resolve , reject)=> {
    const condicion = true
    if (condicion){
        setTimeout(()=>{
            resolve(Productos)
        }, 3000)
    } else{
        setTimeout(()=>{
            reject ('error')
        }, 3000)
    }
})
