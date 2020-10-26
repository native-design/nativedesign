document.querySelector('#anim-fadein-btn').onclick = function() {
    this.classList.add('nd-anim-fadein');
}

document.querySelector('#anim-fadein-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-fadein');
})

document.querySelector('#anim-fadeout-btn').onclick = function() {
    this.classList.add('nd-anim-fadeout');
}

document.querySelector('#anim-fadeout-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-fadeout');
})

document.querySelector('#anim-rotate-btn').onclick = function() {
    this.classList.add('nd-anim-rotate');
}

document.querySelector('#anim-rotate-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-rotate');
})

document.querySelector('#anim-scale-up-btn').onclick = function() {
    this.classList.add('nd-anim-scale-up');
}

document.querySelector('#anim-scale-up-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-scale-up');
})

document.querySelector('#anim-scale-down-btn').onclick = function() {
    this.classList.add('nd-anim-scale-down');
}

document.querySelector('#anim-scale-down-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-scale-down');
})

document.querySelector('#anim-flip-btn').onclick = function() {
    this.classList.add('nd-anim-flip');
}

document.querySelector('#anim-flip-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-flip');
})

document.querySelector('#anim-swing-btn').onclick = function() {
    this.classList.add('nd-anim-swing');
}

document.querySelector('#anim-swing-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-swing');
})

document.querySelector('#anim-slidein-btn').onclick = function() {
    this.classList.add('nd-anim-slidein');
}

document.querySelector('#anim-slidein-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-slidein');
})

document.querySelector('#anim-slideout-btn').onclick = function() {
    this.classList.add('nd-anim-slideout');
}

document.querySelector('#anim-slideout-btn').addEventListener("animationend", function() {
    this.classList.remove('nd-anim-slideout');
})

document.querySelector('#anim-rotate-in-btn').onclick = function() {
    if (this.classList.contains('nd-anim-rotate')) {
        this.classList.remove('nd-anim-rotate');
    } else {
        this.classList.add('nd-anim-rotate');
    }
}

document.querySelector('#openDefaultModalBtn').onclick = function() {
    nd.modal.open({
        title: 'Hello World',
        text: "你好世界！",
        actions: "<div class='nd-btn nd-btn-outlined nd-btn-primary nd-modal-closebtn'>Close</div>",
        class: 'nd-card-shaped',
        // styles: {
        //     background: 'black'
        // },
        shade: true,
        // shadeStyles: {
        //     background: 'red'
        // },
        shadeClass: 'ii'
    })
}
