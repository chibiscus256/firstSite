let slider = {
    slides:['img/slider/1.jpg','img/slider/2.jpg','img/slider/3.png','img/slider/4.jpg', 'img/slider/5.jpg',
        'img/slider/6.jpg'],
    frame: 0,
    set: function(image) { // установка нужного фона слайдеру
            document.getElementById("images").setAttribute("style","background: " +
                "url("+image+") no-repeat center center / cover; background-size: cover; opacity: 1;");
    },
    init: function() { // запуск слайдера с картинкой с нулевым индексом
        this.set(this.slides[this.frame]);

    },
    left: function() { // крутим на один кадр влево
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() { // крутим на один кадр вправо
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
        console.log(this.slides[this.frame]);   
    },
    newTimer : function (){
    timerID = window.setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
        slider.right();
    },6000);
}
};

window.onload = function() { // запуск слайдера после загрузки документа
    slider.init();
};



