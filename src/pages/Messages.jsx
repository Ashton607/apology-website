import React from 'react'

function Messages(){
 return (
<section className="container">
<div className="card">
<h2 className="h1">A Little Promise</h2>
<p className="lead">Short, true, and honest.</p>
<p style={{lineHeight:1.6}}>I promise to listen closely when you speak, to hold you with patience, and to learn from my mistakes. I promise to show up — not perfectly, but with steady effort and an open heart. If you let me, I want to learn how to be the person who keeps you safe and makes you laugh every now and then.</p>
<div style={{marginTop:18}}>
<button onClick={()=>{
const el = document.createElement('div')
el.className='floating-heart'
el.style.left = (window.innerWidth*0.5)+'px'
el.style.top = (window.innerHeight*0.65)+'px'
el.innerHTML='💫'
document.body.appendChild(el)
setTimeout(()=>el.remove(),1400)
}} style={{padding:'10px 16px', borderRadius:10, border:'none', background:'transparent', color:'var(--accent)'}}>Send a little star</button>
</div>
</div>
</section>
)
}

export default Messages
