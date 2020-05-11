class TextExtender {
    constructor(obj) {
        this.triggers = document.querySelectorAll(obj.triggers);
        this.target = document.querySelectorAll(obj.target);
        this.activeClass = obj.activeClass;
        this.addEvents()
    }

    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    addEvents() {
        this.triggers.forEach((trigger) => trigger.addEventListener('click', () => {
            const currentParent = this.findParent(trigger, 'comment');
            const currentTarget = currentParent.querySelector('.comment-info__text');
            currentTarget.classList.add(this.activeClass);
            trigger.style.display = 'none';
        }))
    }
}
export default TextExtender;