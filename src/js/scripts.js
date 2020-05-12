import TextExtender from "./modules/textExtender";
import AddStar from "./modules/addStar";
import ImageZoomer from "./modules/imageZoomer";

new TextExtender({
    triggers: '.comment-info__text-more',
    target: '.comment-info__text',
    activeClass: 'comment-info__text--extended'
})

new AddStar();

new ImageZoomer({
    triggers: '.comment__extended-img'
})