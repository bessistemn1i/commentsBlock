import TextExtender from "./modules/textExtender";
import AddStar from "./modules/addStar";

new TextExtender({
    triggers: '.comment-info__text-more',
    target: '.comment-info__text',
    activeClass: 'comment-info__text--extended'
})

new AddStar();