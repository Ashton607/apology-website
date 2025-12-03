import { useEffect } from 'react'
import React from 'react'
import './Pages.css'


function createStars(){
const n = 60
const container = document.createElement('div')
container.className = 'starfield'
for(let i=0;i<n;i++){
const s = document.createElement('div')
s.className = 'star'
const x = Math.random()*100
const y = Math.random()*100
const size = Math.random()*2+0.6
s.style.left = x + '%'
s.style.top = y + '%'
s.style.width = `${size}px`
s.style.height = `${size}px`
s.style.opacity = 0.7 + Math.random()*0.4
container.appendChild(s)
}
document.body.appendChild(container)
}

function Home(){
 useEffect(()=>{
if(!document.querySelector('.starfield')) createStars()
},[])


return (
<section className="container">
<div className="card moon-wrap">
<div>
<div className="moon glow" aria-hidden />
</div>
<div style={{flex:1}}>
<h2 className="h1">Aan Chanell Kok 🌺🌙</h2>
<p className="lead">Voordat ek verskoning vra, wil ek net sê:<br/>
Jy is my engel, my blom, my begin en ook my einde.<br/>
Ek weet dit klink ongeloofwaardig na alles wat ek gedoen en gesê het, maar dit is die onverbloemde waarheid.<br/>
Ek sal vir die res van my lewe opmaak daarvoor, en seker maak dat jy my glo. Ek sal bewys dat my eerlike intensie werklik is.
</p>
<p style={{marginTop:18}}>Use the links above to read my apology, browse memories, and walk through the little garden I created just for you.</p>
</div>
</div>
</section>
)
}

export default Home
