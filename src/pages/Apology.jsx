import React from 'react'
import { useState, useEffect } from 'react'




function Apology (){
const [bloom,setBloom] = useState(false)


useEffect(()=>{
// small entrance bloom
const t = setTimeout(()=> setBloom(true), 650)
return ()=> clearTimeout(t)
},[])


// Personalized apology text (poetic)
const apologyLines = [
"Ek het altyd gesê dat die probleme in ons verhouding net ons twee s'n is, en dat ons dit nie ander mense se probleem moet maak nie. Maar ongelukkig het ek presies dít gedoen – en dit nogal voor vreemdelinge en ook jou vriende/vriendinne.",
"Hiervoor sal ek nooit genoeg kan sê hoe jammer ek is nie. My maniere was onvanpas en laaghartig (cowardly). Ek kan myself nie ’n man noem as ek sulke skandelike dinge aanvang nie. Ek skaam my dood vir my optredes.",
"Ek het toegelaat dat drank my oorweldig en my dinge laat sê en doen wat ek eerlikwaar nie bedoel nie. Ek het lelike dinge vir jou gesê omdat ek onseker (insecure) is en nie man genoeg is om my probleme alleen te hanteer nie.",
"Ek het ook mense in my probleme betrek en hulle ongemaklik laat voel teenoor jou. As gevolg van my, moet daardie einste mense jou nou met jammerte aankyk en agter jou rug praat.",
"Woorde is nie genoeg om op te maak nie. Ek sal vir die res van my lewe opmaak. Ek is so ongelooflik jammer; ek kry skaam oor my optredes, maar ek sal nooit skaam kry om die regte ding te doen nie.",
"En hierdie boodskap (website) is net een van die baie regte dinge wat ek sal doen totdat jy weer jouself is. En selfs dan sal ek nie ophou om die regte ding te doen nie.",
"Vergewe my asseblief, my Moonflower.🌺🌙"
]
 return (
<section className="container">
<div className="card" style={{display:'flex',gap:28,alignItems:'center'}}>
<div className="flower-spot">
<svg className={`moonflower ${bloom? 'bloom':'bud'}`} viewBox="0 0 200 200" width="160" height="160">
<defs>
<radialGradient id="p" cx="30%" cy="25%">
<stop offset="0%" stopColor="#ffffff" />
<stop offset="70%" stopColor="#cda7ff" />
</radialGradient>
</defs>
<g transform="translate(100,100)">
<g className="petals" style={{transformOrigin:'center'}}>
{[...Array(8)].map((_,i)=> (
<ellipse key={i} rx="18" ry="36" fill="url(#p)" opacity={0.95}
transform={`rotate(${i*45}) translate(0,-40)`} />
))}
</g>
<circle r="22" fill="#fff" opacity={0.95} />
<rect x="-6" y="18" width="12" height="72" rx="6" fill="#6e8aff" transform="rotate(6)" />
</g>
</svg>
</div>


<div style={{flex:1}}>
<h2 className="h1">📝 Verskoning aan My Moonflower</h2>
<div style={{marginTop:8}}>
{apologyLines.map((l,i)=> (
<p key={i} style={{margin:'10px 0', lineHeight:1.6}}>{l}</p>
))}
</div>
<div style={{marginTop:14}}>
<button onClick={()=>{
setBloom(!bloom)
// floating heart effect
const heart = document.createElement('div')
heart.className = 'floating-heart'
heart.style.left = (window.innerWidth * 0.6) + 'px'
heart.style.top = (window.innerHeight * 0.5) + 'px'
heart.innerHTML = '❤️'
document.body.appendChild(heart)
setTimeout(()=> heart.remove(),1500)
}} style={{background:'linear-gradient(90deg,var(--accent), var(--accent-2))', border:'none', padding:'10px 18px', color:'#051223', borderRadius:10, cursor:'pointer'}}>Bloom for me</button>
</div>
</div>
</div>
</section>
)
}

export default Apology
