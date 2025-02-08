const imagenes = [
    "images/spiderman.png",
    "images/pika.png",
    "images/jake.png",
    "images/deadpool.png",
    "images/freddy-fazbear.png"
];

let indice = 0;

        const imageDisplay = document.getElementById('imageDisplay');
        const leftBtn = document.getElementById('leftBtn');
        const rightBtn = document.getElementById('rightBtn');

        rightBtn.addEventListener('click', () => {
            imageDisplay.style.opacity = 0; 
            setTimeout(() => {
                indice = (indice + 1) % imagenes.length;
                imageDisplay.src = imagenes[indice];
                setTimeout(() => {
                    imageDisplay.style.opacity = 1;
                }, 50);
            }, 500);
        });
        
        leftBtn.addEventListener('click', () => {
            imageDisplay.style.opacity = 0;
            setTimeout(() => {
                indice = (indice - 1 + imagenes.length) % imagenes.length;
                imageDisplay.src = imagenes[indice];
                setTimeout(() => {
                    imageDisplay.style.opacity = 1;
                }, 50);
            }, 500);
        });

