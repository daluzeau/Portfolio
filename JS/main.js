// Sélectionne l'élément avec l'ID 'menu-icon' dans le document HTML
// Cela correspond à l'icône de menu que l'utilisateur verra sur mobile
let menuIcon = document.querySelector('#menu-icon');

// Sélectionne l'élément avec la classe 'navbar' dans le document HTML
// Cet élément est la barre de navigation contenant les liens du menu
let navbar = document.querySelector('.navbar');

// Ajoute un événement 'onclick' à l'icône de menu
// Lorsque l'utilisateur clique sur l'icône, le code à l'intérieur de cette fonction sera exécuté
menuIcon.onclick = () => {
    
    // Alterne (ajoute ou retire) la classe 'fa-xmark' à l'icône du menu
    // 'fa-xmark' est une icône de croix (X) provenant de la bibliothèque Font Awesome, 
    // qui remplace l'icône de menu hamburger lorsqu'elle est active.
    menuIcon.classList.toggle('fa-xmark');
    
    // Alterne (ajoute ou retire) la classe 'active' à la barre de navigation
    // Si la classe 'active' est présente, le menu est visible ; sinon, il est masqué.
    // Cela permet d'afficher ou de masquer la navbar sur les petits écrans (téléphones).
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');   
            });
        };
    });
    /*========== sticky nav bar ============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*========== remove toggle icon and navbar ============*/
    menuIcon.classList.remove('fa-xmark');  
    navbar.classList.remove('active');
};

