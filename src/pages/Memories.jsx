import React from 'react'
import park from '../assets/park.jpeg'
import pragtig from '../assets/pragtig.jpeg'
import selfie from '../assets/selfie.jpeg'
import selfiee from '../assets/selfie2.jpeg'
import makoti from '../assets/makoti.jpeg'
import model from '../assets/model.jpeg'
import matric from '../assets/matric.jpeg'
import wallpaper from '../assets/wallpaper.jpeg'





const sample = [
{id:1, title:'Ons bank by die park in Douglas', src:park, caption:'Dink jy nog aan daardie Sondagmiddag toe ons vir die heel eerste keer saam op die bankie gesit het?Ons het burgers en skyfies (fries) gedeel, en in daardie oomblik het my hart besef dat dit alles is wat dit ooit wou hê.'},
{id:2, title:'Pragtige Blom🌺', src:pragtig, caption:'Ek onthou daardie Vrydag toe jy kom kuier het, presies op die dag van my laaste vraestel. Jy was daar vir my toe niemand anders daar was nie. Daardie dag het jy my gewys dat jy my anker is, die een wat altyd onvoorwaardelik by my staan'},
{id:3, title:'My Alles💍', src:selfie, caption:'Jy het aangedring op n selfie want jy het daardie dag net ongelooflik pragtig gelyk.Ek moes net die oomblik vasvang—jy was so stralend mooi!'},
{id:4, title:'My Koningin👑', src:selfiee, caption:'Ek hou nie daarvan om in die openbaar uit te eet nie, maar jy het my oorreed dat ons restaurant toe moes gaan.Daardie dag het jy my bewys dat jy opreg is en opmaak vir jou foute. Nou doen ek presies dieselfde vir jou, want jy het my gewys wat dit beteken om reg te maak.'},
{id:5, title:'My Makoti❤️😅', src:makoti, caption:'Jy vra my altyd om jou fotos te redigeer(edit), maar woorde kan eenvoudig nie beskryf hoe ongelooflik pragtig jy is nie.'},
{id:6, title:'Ons 1ste foto shoot📷', src:matric, caption:'Ek dink dit was jou eerste keer in n formele rok, en my asem was heeltemal weggeslaan.Jy was só pragtig! Jy was so asemrowend mooi, my engel🥹'},
{id:7, title:'My Stunning Model', src:model, caption:'Jy is gebore om n model te wees!Woorde kan nie eens beskryf hoe ongelooflik en stunning (pragtig/indrukwekkend) jy is nie.'},
{id:8, title:'My Lief❤️💍', src:wallpaper, caption:'Maak nie saak wat tussen ons gebeur nie ek sal verlief raak op jou in die leeftyd en die volgende'},
]

function Memories (){
 return (
<section className="container">
<div className="card">
<h2 className="h1">Our Memories</h2>
<p className="lead">Moments I keep like constellations — small bright things I return to.</p>
<div className="grid" style={{marginTop:18}}>
{sample.map(m=> (
<div className="mem-card" key={m.id}>
<img src={m.src} alt={m.title} />
<p><strong>{m.title}</strong><br/>{m.caption}</p>
</div>
))}
</div>
</div>
</section>
)
}

export default Memories
