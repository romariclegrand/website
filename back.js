//selectionne les elements necessaires
const menuTrigger=document.querySelector('.menu-trigger');
const menu =document.querySelector('.menu');

//add events on click
menuTrigger.addEventListener('click',()=>{
    menu.style.display=menu.style.display==='block'?'none':'block';});

//close the menu on click away
document.addEventListener('click',(event)=>{
    if(! menuTrigger.contains(event.target)&&! menu.contains(event.target)){menu.style.display='none'};
});
// recup tous les liens du menu
const menuLinks=document.querySelectorAll('.menu a');
const section=documents.querySelectorAll('section');
// const contenuDiv=document.getElementById('contenu')
//ajoute un evenement a chaque lien 
menuLinks.forEach(link=>{link.addEventListener('click',(e)=>{e.preventDefault();
    const sectionId=link.getAttribute('data-section');
    //affiche le contenu correspondant
    //cache toute les sections
    section.forEach(section=>{section.classList.add('hidden');

    });
    //affiche la section correspondante
    const sectionToShow=document.getElementById(sectionId);
    if(sectionToShow){sectionToShow.classList.remove('hidden');

    }

});
});
setInterval(function() 
{
    document.getElementById("date-time").innerHTML=new Date().toLocaleString();
},1000);
 

