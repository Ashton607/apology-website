import React from 'react'
import { useState } from 'react'

function Moonflower({seed, onClick}){
const [open,setOpen] = useState(false)
return (
<button className="flower-btn" onClick={() => { setOpen(true); onClick && onClick(seed)}}>
<svg className={`moonflower ${open? 'bloom':'bud'}`} viewBox="0 0 200 200" width="120" height="120">
<defs>
<radialGradient id={`g-${seed}`} cx="35%" cy="30%">
<stop offset="0%" stopColor="#fff" />
<stop offset="70%" stopColor="#cda7ff" />
</radialGradient>
</defs>
<g transform="translate(100,100)">
{[...Array(7)].map((_,i)=> (
<ellipse key={i} rx="12" ry="28" fill={`url(#g-${seed})`} transform={`rotate(${i*51}) translate(0,-36)`} />
))}
<circle r="16" fill="#fff" />
<rect x="-4" y="16" width="8" height="54" rx="5" fill="#5f7bff" transform="rotate(6)" />
</g>
</svg>
</button>
)
}

function FlowerGardern(){
  const seeds = Array.from({length:9}).map((_,i)=> i+1)
function handleClick(seed){
const heart = document.createElement('div')
heart.className='floating-heart'
heart.innerHTML = '🌙'
heart.style.left = (100 + (seed*30)) + 'px'
heart.style.top = (window.innerHeight*0.7) + 'px'
document.body.appendChild(heart)
setTimeout(()=>heart.remove(),1400)
}


return (
<section className="container">
<div className="card">
<h2 className="h1">Flower Garden</h2>
<p className="lead">Click any moonflower and watch it bloom — each one carries a small promise from me to you.</p>
<div className="garden" style={{marginTop:18}}>
{seeds.map(s=> <Moonflower key={s} seed={s} onClick={handleClick} />)}
</div>
</div>
</section>
)
}
export default FlowerGardern
