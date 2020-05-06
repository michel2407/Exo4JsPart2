// window.addEventListener écoute l'élément load de notre page (window)
//Au chargement de ma page du exécute la fonction (loadPage)
window.addEventListener('load', loadPage);
//la fonction loadpage permet de rendre invisible la section travels au chargement de la page.
function loadPage() {
  // pour faire disparaitre la section
  document.getElementById('travels').style.visibility ='hidden';
}
// Au scroll de ma page j'active la fonction visibilityElementTravels
window.addEventListener('load', visibilityElementTravels);
//la fonction visibilityElementTravelspermet de rendre la section traverls visible au scroll de la page
function visibilityElementTravels(){
  // Je stock dans scrollValue la valeur(en pixel) du scroll vertical de ma page(window)
  var scrollValue = window.scrolly;
  // j'affiche dans ma console du résultat de window.scrolly stocké dans ma variable scrollValue
  console.log(scrollValue);
  // Si la valeur du scrollValue est suppérieur 290px, alors je rend visible la section travels
  if(scrollValue > 290{
    // pour faire apparaitre la section
    document.getElementById('travels').style.visibility = 'visible');
  }
}
