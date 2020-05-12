class ImageZoomer {
    constructor(obj) {
        this.triggers = document.querySelectorAll(obj.triggers);
        this.popupContainer = document.querySelector('.imagePopup');
        this.imageInBigSize = this.popupContainer.querySelector('.imagePopup__img');
        this.closer = document.querySelector('.imagePopup__close');
        this.addEvent()
    }

    addEvent() {
        this.triggers.forEach((trigger) => trigger.addEventListener('click', () => {
            this.popupContainer.classList.add('imagePopup--active');
            this.imageInBigSize.src = trigger.src;
            this.imageInBigSize.alt = trigger.alt;
        }));

        this.closer.addEventListener('click', () => {
            this.popupContainer.classList.remove('imagePopup--active');
            this.imageInBigSize.src = '';
            this.imageInBigSize.alt = '';
        })
    }
}

export default ImageZoomer