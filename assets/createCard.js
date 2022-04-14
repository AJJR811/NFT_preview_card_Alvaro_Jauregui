export function createCard(){
    const app=document.querySelector('#app')
    const contenedor=document.createElement('div')
    contenedor.className='contenedor'
    app.appendChild(contenedor)
    const maincards=document.createElement('div')
    maincards.className='main-cards'
    contenedor.appendChild(maincards)
    const imagencontenedor=document.createElement('div')
    imagencontenedor.className='imagen-contenedor'
    maincards.appendChild(imagencontenedor)
   const imagen=document.createElement('img')
   imagen.src='assets/image-equilibrium.jpg'
   imagen.alt=' '
   imagen.className='main-imagen'
   imagencontenedor.appendChild(imagen)
   const textcontainer=document.createElement('div')
   textcontainer.className='text-container'
   maincards.appendChild(textcontainer)
   const titles=document.createElement('h1')
   titles.textContent='Equilibrium #3429'
   titles.className='titles'
   textcontainer.appendChild(titles)
   const descriptions=document.createElement('p')
   descriptions.textContent='Our Equilibrium collection promotes balance and calm.'
   descriptions.className='descriptions'
   textcontainer.appendChild(descriptions)
   const subinfo=document.createElement('div')
   subinfo.className='sub-info'
   textcontainer.appendChild(subinfo)
   const info=document.createElement('div')
   info.className='info'
   subinfo.appendChild(info)
   const icon=document.createElement('img')
   icon.src='assets/icon-ethereum.svg'
   icon.alt=' '
   icon.className='icon'
   info.appendChild(icon)
   const sub=document.createElement('span')
   sub.textContent='0.041 ETH'
   sub.className='sub'
   info.appendChild(sub)
   const info2=document.createElement('div')
   info2.className='info'
   subinfo.appendChild(info2)
   const icono=document.createElement('img')
   icono.src='assets/icon-clock.svg'
   icono.alt=' '
   icono.className='icono'
   info2.appendChild(icono)
   const sppa=document.createElement('span')
   sppa.textContent='3 days left'
   info2.appendChild(sppa)
   const infocreador=document.createElement('div')
   infocreador.className='info-creador'
   textcontainer.appendChild(infocreador)
   const imag=document.createElement('img')
   imag.src='assets/image-avatar.png'
   imag.alt=' '
   imag.className='imag'
   infocreador.appendChild(imag)
   const textcreador=document.createElement('p')
   textcreador.textContent='Creation of '
   textcreador.className='text-creador'
   infocreador.appendChild(textcreador)
   const sppan=document.createElement('span')
   sppan.textContent='Jules Wyvern'
   sppan.className='name-creador'
   textcreador.appendChild(sppan)
}