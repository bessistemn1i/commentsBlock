class AddStar {
    constructor() {
        this.ratingContainerWidth = 66;
        this.ratingContainers = document.querySelectorAll('.comment-info__rating-stars-front');
        this.addEvents()
    }

    getRandomIntInclusive(min, max) {
        const res = Math.random() * (max - min) + min;
        return parseFloat(res.toFixed(1));
      }

    addEvents() {
        const random = this.getRandomIntInclusive(1,5);
        const correctWidth = (random * this.ratingContainerWidth) / 5;
        console.log(correctWidth);
        this.ratingContainers.forEach((ratingContainer) => {
            console.log(ratingContainer);
            ratingContainer.style.width = `${correctWidth}px`;
        });
    }
}

export default AddStar