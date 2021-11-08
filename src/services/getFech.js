
const Productos = [
    {
        id: "1",
        titulo: "Velvet evening",
        descripcion: "Cuando el sol comienza a descender, una calma sedosa y aterciopelada desciende con tonos brillantes en el cielo occidental. Enmarcado en un marco de madera de hoja de plata de 3",
        tecnica: "Óleo en lienzo",
        dimensiones: "100x100cm",
        envio: "por transportistas especializados.",
        precio: "631.200 ARS",
        imagen:'https://i.ibb.co/kmj6bfg/paisajismo1.png'
    },
    {
        id: "2",
        titulo: "Despertar de luz",
        descripcion: "La luz sobre el movimiento de las hojas recreando todo el otoño y tu imaginacion volando con ellas , danzando y disfrutando esos momentos maravillosos.",
        tecnica: "Acrílico en Lienzo",
        dimensiones: "120x150cm",
        envio: "por transportistas especializados.",
        precio: "948.000 ARS",
        imagen:'https://i.ibb.co/kqMLrGQ/paisajismo2.png'
    },
    {
        id: "3",
        titulo: "The Adversity isnt so fierce as hes painted",
        descripcion: "La 'Adversidad' no es como la pintan... buque encallado, devastado, en absoluta degradación inmerso en un crepúsculo donde no es claro si es el amanecer ó anochecer, me habla de la condición humana que vivimos actualmente.",
        tecnica: "Óleo en Lienzo",
        dimensiones: "60x80.5cm",
        envio: "por transportistas especializados.",
        precio: "331.400 ARS",
        imagen:'https://i.ibb.co/m5pVpJh/paisajismo3.png'
    },
    {
        id: "4",
        titulo: "The LOOP - Chicago",
        descripcion: "El Chicago Loop Skytrain te sumerge en esta fascinante ciudad cargada de historia, desde Al Capone hasta la innovación arquitectónica de sus rascacielos. Pintado en acrílico sobre madera de nogal, cuya veta aporta una dinámica natural, el sujeto se dibuja primero a lápiz antes de pintarlo solo con un pincel. Las rayas rojas se aplican inicialmente y luego se vuelven a pintar con gran detalle para crear una ilusión de transparencia.",
        tecnica: "Óleo en Madera",
        dimensiones: "40x60cm",
        envio: "por transportistas especializados.",
        precio: "417.000 ARS",
        imagen:'https://i.ibb.co/xjJN4xP/paisajismo4.png'
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