Bonjour à tous, le but ici est de faire un descriptif détaillé de mon application.

j'ai fais l'intégration d'un site que j'ai découvert sur la plateforme Awwward en modifiant le texte et les images graces à chatGPT et Leronardo (ia qui permet nottament de créér des images.).

Performances : 

<img width="2548" height="1269" alt="performancesAwwardUn" src="https://github.com/user-attachments/assets/2b9234d1-7964-485b-92fd-ee859b05b77d" />

Arborescence :

<img width="377" height="676" alt="ArborescenceAwwardUn" src="https://github.com/user-attachments/assets/aa404de1-bd14-4db7-80db-68217bb5fe5e" />

Exemple de composant :

<img width="1965" height="493" alt="composantAwwardUn" src="https://github.com/user-attachments/assets/5be5cb9c-8b82-4f45-a5e2-84ca1dcc2880" />

Ici j'ai créé un composant "Support". 
Le Custom Hook "UseAnimSupport" permet de gérer l'animation et d'initialiser des states et des ref(via useState et useRef.). 
Je vais afficher le titre dans le composant "TitreSupport" que l'on va réutiliser dans notre application.
On passe la variable "nb" en props des composant TitreCacheSupport pour gérer une différence de texte que l'on affiche dans une balise "p".
Enfin, il y a un composant "ContenuSupport pour afficher du texte.

Site Responsive : 

  Large size :

  <img width="2529" height="1263" alt="LargeSizeAwwwardUn" src="https://github.com/user-attachments/assets/96da19a5-8bb7-4750-9d37-62701016bf5f" />

  Small size :

  <img width="368" height="1260" alt="smallSizeAwwwardUn" src="https://github.com/user-attachments/assets/8c7d8132-54b2-43ce-b10e-f0ce1bbaf2a3" />
