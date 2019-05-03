//Drag-drop Enigme Einstein
/*		(function() { // On utilise une IIFE pour ne pas polluer l'espace global
    var storage = {}; // Contient l'objet de la div en cours de dÃ©placement
	var a1 = document.getElementById("a1");

    function init() { // La fonction d'initialisation
        var elements = document.querySelectorAll('.draggableBox'),
            elementsLength = elements.length;

        for (var i = 0; i < elementsLength; i++) {
            elements[i].addEventListener('mousedown', function(e) { // Initialise le drag & drop
                var s = storage;
                s.target = e.target;
                s.offsetX = e.clientX - s.target.offsetLeft;
                s.offsetY = e.clientY - s.target.offsetTop;
				/*
				-offsetX : La propriÃ©tÃ© en lecture seule offsetX de l'interface MouseEvent fournit le dÃ©calage 
				sur l'axe X du pointeur de la souris entre cet Ã©vÃ¨nement et la bordure 
				de la marge intÃ©rieure du noeud cible.
				
				-clientX : donne les coordonnees oÃ¹ l'evenement se produit
				
				-offsetLeft : Renvoie le nombre de pixels dont le coin supÃ©rieur gauche de l'Ã©lÃ©ment 
				courant,qui est dÃ©calÃ© vers lÃ  gauche au sein du nÅ“ud offsetParent.
				*/
  /*          });

            elements[i].addEventListener('mouseup', function() { // Termine le drag & drop
                storage = {};
            });
        }

        document.addEventListener('mousemove', function(e) { // Permet le suivi du drag & drop
            var target = storage.target;

            if (target) {
                target.style.top = e.clientY - storage.offsetY + 'px';
                target.style.left = e.clientX - storage.offsetX + 'px';
            }
        });
		
		if (a1.hasChildNodes()) { 
			// faire quelque chose avec les 'foo.childNodes'
			alert("ok");
		}
    }

    init(); // On initialise le code avec notre fonction toute prÃªte.
})();*/

(function() {

    var dndHandler = {

        draggedElement: null, // PropriÃ©tÃ© pointant vers l'Ã©lÃ©ment en cours de dÃ©placement

        applyDragEvents: function(element) {

            element.draggable = true;

            var dndHandler = this; // Cette variable est nÃ©cessaire pour que l'Ã©vÃ©nement Â« dragstart Â» ci-dessous accÃ¨de facilement au namespace Â« dndHandler Â»

            element.addEventListener('dragstart', function(e) {
                dndHandler.draggedElement = e.target; // On sauvegarde l'Ã©lÃ©ment en cours de dÃ©placement
                e.dataTransfer.setData('text/plain', ''); // NÃ©cessaire pour Firefox this.innerHTML
            });

        },

        applyDropEvents: function(dropper) {

            dropper.addEventListener('dragover', function(e) {
                e.preventDefault(); // On autorise le drop d'Ã©lÃ©ments
                this.className = 'dropper drop_hover'; // Et on applique le style adÃ©quat Ã  notre zone de drop quand un Ã©lÃ©ment la survole
            });

            dropper.addEventListener('dragleave', function() {
                this.className = 'dropper'; // On revient au style de base lorsque l'Ã©lÃ©ment quitte la zone de drop
            });

            var dndHandler = this; // Cette variable est nÃ©cessaire pour que l'Ã©vÃ©nement Â« drop Â» ci-dessous accÃ¨de facilement au namespace Â« dndHandler Â»

            dropper.addEventListener('drop', function(e) {

                var target = e.target,
                    draggedElement = dndHandler.draggedElement, // RÃ©cupÃ©ration de l'Ã©lÃ©ment concernÃ©
                    clonedElement = draggedElement.cloneNode(true); // On crÃ©Ã© immÃ©diatement le clone de cet Ã©lÃ©ment
                while (target.className.indexOf('dropper') == -1) { // Cette boucle permet de remonter jusqu'Ã  la zone de drop parente
                    target = target.parentNode;
                }

                target.className = 'dropper'; // Application du style par dÃ©faut

                clonedElement = target.appendChild(clonedElement); // Ajout de l'Ã©lÃ©ment clonÃ© Ã  la zone de drop actuelle
                dndHandler.applyDragEvents(clonedElement); // Nouvelle application des Ã©vÃ©nements qui ont Ã©tÃ© perdus lors du cloneNode()
				//alert(draggedElement.parentNode);
				if(draggedElement.parentNode !== null){
					draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'Ã©lÃ©ment d'origine
				}
				else{
					draggedElement.parentNode.style.display = "none";
				}
					//draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'Ã©lÃ©ment d'origine

            });

        }

    };

    var elements = document.querySelectorAll('.draggable'),
        elementsLen = elements.length;

    for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i]); // Application des paramÃ¨tres nÃ©cessaires aux Ã©lÃ©ments dÃ©plaÃ§ables
    }

    var droppers = document.querySelectorAll('.dropper'),
        droppersLen = droppers.length;

    for (var i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i]); // Application des Ã©vÃ©nements nÃ©cessaires aux zones de drop
    }
	/*Le nom des classes, id, ont ete rendus volontairement difficile Ã  lire pour Ã©viter de trouver
	facilement l'Ã©nigme Ã  partir du code source*/
	
	let buttonVerif = document.getElementById("buttonVerif");
	buttonVerif.addEventListener('click', function(){
		const a1 = ["redi draggable a1img","redi draggable b2img","redi draggable c3img","redi draggable d4img"];
		const a2 = ["redi draggable m1img","redi draggable n2img","redi draggable o3img","redi draggable p4img"];
		const a3 = ["redi draggable h1img","redi draggable i2img","redi draggable j3img","redi draggable k4img"];
		const a4 = ["redi draggable r5img","redi draggable s4img","redi draggable t3img","redi draggable u2img"];
		const a5 = ["redi draggable w3img","redi draggable x2img","redi draggable y1img","redi draggable z4img"];
	
		const a25 = document.getElementById("a25");
		const a8 = document.getElementById("a8");
		const a14 = document.getElementById("a14");
		const a6 = document.getElementById("a6");
		const a12 = document.getElementById("a12");
		
		let compteur25 = 0;
		let compteur8 = 0;
		let compteur14 = 0;
		let compteur6 = 0;
		let compteur12 = 0;
		
		let complet25 = false;
		let complet8 = false;
		let complet14 = false;
		let complet6 = false;
		let complet12 = false;
		
		if(a25.hasChildNodes()){
			//Toutes les classes des elements de la div sont rÃ©cupÃ©rÃ©s
			//On rÃ©cupÃ¨re par ailleurs les images dans un tab
			
			let imgs = a25.getElementsByTagName("img");
			let tailleImgs = imgs.length;
			let classes = [];
			for(let b = 0;b < tailleImgs;b++){
				//imgs[b].className;
				classes.push(imgs[b].className);
			}
			
			
			let tabBoolean = [];
			for (let p = 0, q = classes.length; p < q; p++) {
				tabBoolean[p] = -1;
			}
			//On a maintenant un tab avec Ã  chaque indice une classe
			//alert(classeNew[2]);
			for (let j = 0, k = classes.length; j < k; j++) {
				for(let m = 0, n = classes.length; m < n; m++) {
					if (classes[j] === a1[m]) {
						imgs[j].style.border = "3px green solid";
						compteur25 += 1;
						tabBoolean[j] = 1; 
					}
				}	
			}
					
				for (let i = 0, c = classes.length; i < c; i++) {	
					if(tabBoolean[i] !== 1){
						imgs[i].style.border = "3px red solid";
					}
				}
					
					function suppBorder(){
						
						for (let i = 0, c = classes.length; i < c; i++) {	
							if(tabBoolean[i] !== 1){
								imgs[i].style.border = "none";
							}
						}
						
					}
					setTimeout(suppBorder,2000);
					setTimeout(clonerImg,2400);
					setTimeout(suppImgDiv,2500);
			
			function clonerImg(){
				let oldImg;
				let compteur = 0;
				let imageCloneInit = "imageClone";
				let imageClone;
				let compteurLettre;
				
				let tds;
				let tailleTds;
				let f;
				
				for (let i = 0, k = tabBoolean.length; i < k; i++) {
					
					if(tabBoolean[i] !== 1){
						compteurLettre = compteur;
						compteurLettre = compteurLettre.toString();
						
						imageClone = imageCloneInit.concat(compteurLettre);
						compteur += 1;
						imageClone = document.createElement('img');
						
						imageClone = imgs[i].cloneNode(true);
						
						if(imageClone.id === "animaux"){
							
								tds = document.querySelectorAll("td.box.animals");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						
						}
						else if(imageClone.id === "maison"){
							 tds = document.querySelectorAll("td.box.house");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "boissons"){
							 tds = document.querySelectorAll("td.box.drink");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								 f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "cigarettes"){
							 tds = document.querySelectorAll("td.box.smoke");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else{
							alert("erreur");
						}
						
					}
				}
			}
			
			function suppImgDiv(){	
					
				for (let i = 3; i >= 0; i--) {
					
					if(tabBoolean[i] === -1){
						
						//a25.removeChild(imgs[i]);
						
						if(imgs[i].id === "animaux"){
							a25.removeChild(imgs[i]);				
						}
						else if(imgs[i].id === "maison"){
							a25.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "boissons"){
							a25.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "cigarettes"){
							a25.removeChild(imgs[i]);
						}
						else{
							alert("erreur");
						}
					}					
				}
			}
			
			//si compteur = 4 alors complet25 = true;
			
			if(compteur25 === 4){
				complet25 = true;
			}
		}
		//**************************************
		if(a6.hasChildNodes()){
			//Toutes les classes des elements de la div sont rÃ©cupÃ©rÃ©s
			//On rÃ©cupÃ¨re par ailleurs les images dans un tab
			
			let imgs = a6.getElementsByTagName("img");
			let tailleImgs = imgs.length;
			let classes = [];
			for(let b = 0;b < tailleImgs;b++){
				//imgs[b].className;
				classes.push(imgs[b].className);
			}
			
			
			let tabBoolean = [];
			for (let p = 0, q = classes.length; p < q; p++) {
				tabBoolean[p] = -1;
			}
			//On a maintenant un tab avec Ã  chaque indice une classe
			//alert(classeNew[2]);
			for (let j = 0, k = classes.length; j < k; j++) {
				for(let m = 0, n = classes.length; m < n; m++) {
					if (classes[j] === a4[m]) {
						imgs[j].style.border = "3px green solid";
						compteur6 += 1;
						tabBoolean[j] = 1; 
					}
				}	
			}
					
				for (let i = 0, c = classes.length; i < c; i++) {	
					if(tabBoolean[i] !== 1){
						imgs[i].style.border = "3px red solid";
					}
				}
					
					function suppBorder(){
						
						for (let i = 0, c = classes.length; i < c; i++) {	
							if(tabBoolean[i] !== 1){
								imgs[i].style.border = "none";
							}
						}
						
					}
					setTimeout(suppBorder,2000);
					setTimeout(clonerImg,2400);
					setTimeout(suppImgDiv,2500);
			
			function clonerImg(){
				let oldImg;
				let compteur = 0;
				let imageCloneInit = "imageClone";
				let imageClone;
				let compteurLettre;
				
				let tds;
				let tailleTds;
				let f;
				
				for (let i = 0, k = tabBoolean.length; i < k; i++) {
					
					if(tabBoolean[i] !== 1){
						compteurLettre = compteur;
						compteurLettre = compteurLettre.toString();
						
						imageClone = imageCloneInit.concat(compteurLettre);
						compteur += 1;
						imageClone = document.createElement('img');
						
						imageClone = imgs[i].cloneNode(true);
						
						if(imageClone.id === "animaux"){
							
								tds = document.querySelectorAll("td.box.animals");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						
						}
						else if(imageClone.id === "maison"){
							 tds = document.querySelectorAll("td.box.house");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "boissons"){
							 tds = document.querySelectorAll("td.box.drink");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								 f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "cigarettes"){
							 tds = document.querySelectorAll("td.box.smoke");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else{
							alert("erreur");
						}
						
					}
				}
			}
			
			function suppImgDiv(){	
					
				for (let i = 3; i >= 0; i--) {
					
					if(tabBoolean[i] === -1){
						
						
						
						if(imgs[i].id === "animaux"){
							a6.removeChild(imgs[i]);				
						}
						else if(imgs[i].id === "maison"){
							a6.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "boissons"){
							a6.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "cigarettes"){
							a6.removeChild(imgs[i]);
						}
						else{
							alert("erreur");
						}
					}					
				}
			}
			
			//si compteur = 4 alors complet25 = true;
			
			if(compteur6 === 4){
				complet6 = true;
			}
		}
		//**************************************
		if(a8.hasChildNodes()){
			//Toutes les classes des elements de la div sont rÃ©cupÃ©rÃ©s
			//On rÃ©cupÃ¨re par ailleurs les images dans un tab
			
			let imgs = a8.getElementsByTagName("img");
			let tailleImgs = imgs.length;
			let classes = [];
			for(let b = 0;b < tailleImgs;b++){
				//imgs[b].className;
				classes.push(imgs[b].className);
			}
			
			
			let tabBoolean = [];
			for (let p = 0, q = classes.length; p < q; p++) {
				tabBoolean[p] = -1;
			}
			//On a maintenant un tab avec Ã  chaque indice une classe
			//alert(classeNew[2]);
			for (let j = 0, k = classes.length; j < k; j++) {
				for(let m = 0, n = classes.length; m < n; m++) {
					if (classes[j] === a2[m]) {
						imgs[j].style.border = "3px green solid";
						compteur8 += 1;
						tabBoolean[j] = 1; 
					}
				}	
			}
					
				for (let i = 0, c = classes.length; i < c; i++) {	
					if(tabBoolean[i] !== 1){
						imgs[i].style.border = "3px red solid";
					}
				}
					
					function suppBorder(){
						
						for (let i = 0, c = classes.length; i < c; i++) {	
							if(tabBoolean[i] !== 1){
								imgs[i].style.border = "none";
							}
						}
						
					}
					setTimeout(suppBorder,2000);
					setTimeout(clonerImg,2400);
					setTimeout(suppImgDiv,2500);
			
			function clonerImg(){
				let oldImg;
				let compteur = 0;
				let imageCloneInit = "imageClone";
				let imageClone;
				let compteurLettre;
				
				let tds;
				let tailleTds;
				let f;
				
				for (let i = 0, k = tabBoolean.length; i < k; i++) {
					
					if(tabBoolean[i] !== 1){
						compteurLettre = compteur;
						compteurLettre = compteurLettre.toString();
						
						imageClone = imageCloneInit.concat(compteurLettre);
						compteur += 1;
						imageClone = document.createElement('img');
						
						imageClone = imgs[i].cloneNode(true);
						
						if(imageClone.id === "animaux"){
							
								tds = document.querySelectorAll("td.box.animals");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						
						}
						else if(imageClone.id === "maison"){
							 tds = document.querySelectorAll("td.box.house");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "boissons"){
							 tds = document.querySelectorAll("td.box.drink");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								 f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "cigarettes"){
							 tds = document.querySelectorAll("td.box.smoke");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else{
							alert("erreur");
						}
						
					}
				}
			}
			
			function suppImgDiv(){	
					
				for (let i = 3; i >= 0; i--) {
					
					if(tabBoolean[i] === -1){
						
						//a25.removeChild(imgs[i]);
						
						if(imgs[i].id === "animaux"){
							a8.removeChild(imgs[i]);				
						}
						else if(imgs[i].id === "maison"){
							a8.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "boissons"){
							a8.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "cigarettes"){
							a8.removeChild(imgs[i]);
						}
						else{
							alert("erreur");
						}
					}					
				}
			}
			
			//si compteur = 4 alors complet25 = true;
			
			if(compteur8 === 4){
				complet8 = true;
			}
		}
		//**************************************
		if(a14.hasChildNodes()){
			//Toutes les classes des elements de la div sont rÃ©cupÃ©rÃ©s
			//On rÃ©cupÃ¨re par ailleurs les images dans un tab
			
			let imgs = a14.getElementsByTagName("img");
			let tailleImgs = imgs.length;
			let classes = [];
			for(let b = 0;b < tailleImgs;b++){
				//imgs[b].className;
				classes.push(imgs[b].className);
			}
			
			
			let tabBoolean = [];
			for (let p = 0, q = classes.length; p < q; p++) {
				tabBoolean[p] = -1;
			}
			//On a maintenant un tab avec Ã  chaque indice une classe
			//alert(classeNew[2]);
			for (let j = 0, k = classes.length; j < k; j++) {
				for(let m = 0, n = classes.length; m < n; m++) {
					if (classes[j] === a3[m]) {
						imgs[j].style.border = "3px green solid";
						compteur14 += 1;
						tabBoolean[j] = 1; 
					}
				}	
			}
					
				for (let i = 0, c = classes.length; i < c; i++) {	
					if(tabBoolean[i] !== 1){
						imgs[i].style.border = "3px red solid";
					}
				}
					
					function suppBorder(){
						
						for (let i = 0, c = classes.length; i < c; i++) {	
							if(tabBoolean[i] !== 1){
								imgs[i].style.border = "none";
							}
						}
						
					}
					setTimeout(suppBorder,2000);
					setTimeout(clonerImg,2400);
					setTimeout(suppImgDiv,2500);
			
			function clonerImg(){
				let oldImg;
				let compteur = 0;
				let imageCloneInit = "imageClone";
				let imageClone;
				let compteurLettre;
				
				let tds;
				let tailleTds;
				let f;
				
				for (let i = 0, k = tabBoolean.length; i < k; i++) {
					
					if(tabBoolean[i] !== 1){
						compteurLettre = compteur;
						compteurLettre = compteurLettre.toString();
						
						imageClone = imageCloneInit.concat(compteurLettre);
						compteur += 1;
						imageClone = document.createElement('img');
						
						imageClone = imgs[i].cloneNode(true);
						
						if(imageClone.id === "animaux"){
							
								tds = document.querySelectorAll("td.box.animals");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						
						}
						else if(imageClone.id === "maison"){
							 tds = document.querySelectorAll("td.box.house");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "boissons"){
							 tds = document.querySelectorAll("td.box.drink");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								 f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "cigarettes"){
							 tds = document.querySelectorAll("td.box.smoke");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else{
							alert("erreur");
						}
						
					}
				}
			}
			
			
			function suppImgDiv(){	
					
				for (let i = 3; i >= 0; i--) {
					
					if(tabBoolean[i] === -1){
						
						//a25.removeChild(imgs[i]);
						
						if(imgs[i].id === "animaux"){
							a14.removeChild(imgs[i]);				
						}
						else if(imgs[i].id === "maison"){
							a14.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "boissons"){
							a14.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "cigarettes"){
							a14.removeChild(imgs[i]);
						}
						else{
							alert("erreur");
						}
					}					
				}
			}
			
			//si compteur = 4 alors complet25 = true;
			
			if(compteur14 === 4){
				complet14 = true;
			}
		}
		//**************************************
		if(a12.hasChildNodes()){
			//Toutes les classes des elements de la div sont rÃ©cupÃ©rÃ©s
			//On rÃ©cupÃ¨re par ailleurs les images dans un tab
			
			let imgs = a12.getElementsByTagName("img");
			let tailleImgs = imgs.length;
			let classes = [];
			for(let b = 0;b < tailleImgs;b++){
				//imgs[b].className;
				classes.push(imgs[b].className);
			}
			
			
			let tabBoolean = [];
			for (let p = 0, q = classes.length; p < q; p++) {
				tabBoolean[p] = -1;
			}
			//On a maintenant un tab avec Ã  chaque indice une classe
			//alert(classeNew[2]);
			for (let j = 0, k = classes.length; j < k; j++) {
				for(let m = 0, n = classes.length; m < n; m++) {
					if (classes[j] === a5[m]) {
						imgs[j].style.border = "3px green solid";
						compteur12 += 1;
						tabBoolean[j] = 1; 
					}
				}	
			}
					
				for (let i = 0, c = classes.length; i < c; i++) {	
					if(tabBoolean[i] !== 1){
						imgs[i].style.border = "3px red solid";
					}
				}
					
					function suppBorder(){
						
						for (let i = 0, c = classes.length; i < c; i++) {	
							if(tabBoolean[i] !== 1){
								imgs[i].style.border = "none";
							}
						}
						
					}
					setTimeout(suppBorder,2000);
					setTimeout(clonerImg,2400);
					setTimeout(suppImgDiv,2500);
			
			function clonerImg(){
				let oldImg;
				let compteur = 0;
				let imageCloneInit = "imageClone";
				let imageClone;
				let compteurLettre;
				
				let tds;
				let tailleTds;
				let f;
				
				for (let i = 0, k = tabBoolean.length; i < k; i++) {
					
					if(tabBoolean[i] !== 1){
						compteurLettre = compteur;
						compteurLettre = compteurLettre.toString();
						
						imageClone = imageCloneInit.concat(compteurLettre);
						compteur += 1;
						imageClone = document.createElement('img');
						
						imageClone = imgs[i].cloneNode(true);
						
						if(imageClone.id === "animaux"){
							
								tds = document.querySelectorAll("td.box.animals");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						
						}
						else if(imageClone.id === "maison"){
							 tds = document.querySelectorAll("td.box.house");
								//ajout sur enfant si noeud vide du td
								tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "boissons"){
							 tds = document.querySelectorAll("td.box.drink");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								 f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else if(imageClone.id === "cigarettes"){
							 tds = document.querySelectorAll("td.box.smoke");
								//ajout sur enfant si noeud vide du td
								 tailleTds = tds.length;
								f = 0;
								
								while(f < tailleTds){
									if(tds[f].hasChildNodes()){
										
									}
									else{
										tds[f].appendChild(imageClone);
									}
									f++;
								}
						}
						else{
							alert("erreur");
						}
						
					}
				}
			}
		
			
			function suppImgDiv(){	
					
				for (let i = 3; i >= 0; i--) {
					
					if(tabBoolean[i] === -1){
						
						
						if(imgs[i].id === "animaux"){
							a12.removeChild(imgs[i]);				
						}
						else if(imgs[i].id === "maison"){
							a12.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "boissons"){
							a12.removeChild(imgs[i]);
						}
						else if(imgs[i].id === "cigarettes"){
							a12.removeChild(imgs[i]);
						}
						else{
							alert("erreur");
						}
					}					
				}
			}
			
			//si compteur = 4 alors complet25 = true;
			
			if(compteur12 === 4){
				complet12 = true;
			}
		}
		//**************************************
		let complet = complet25 && complet8 && complet14 && complet6 && complet12;
		if(complet){
			let p = document.querySelector('.felicitation'); 
			p.style.display = "block";
			setTimeout(function(){ p.style.display = "none"; }, 3000);
			setTimeout(function(){ 
				let partie = prompt("Voulez-vous rechargez la page ?", "Y/N");
				if (partie != null) {
						document.location.reload(true);
					}
			}, 3200);
		}
		else{
			let pNotComplet = document.querySelector('.complet');
			pNotComplet.style.display = "block";
			setTimeout(function(){ pNotComplet.style.display = "none"; }, 3000);
		}
				
	},false);
	
	let buttonReinitialiser = document.getElementById('buttonReinitialiser');
	buttonReinitialiser.addEventListener('click',function(){
		document.location.reload(true);
	},false);

})();
