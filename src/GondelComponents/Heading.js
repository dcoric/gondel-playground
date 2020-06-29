import {Component, EventListener, GondelBaseComponent} from '@gondel/core';
import { PageHeading } from '../Components/PageElements';
import '../Components/PageElements/page-elements.css';

// The @Component decorator will connect the class with `data-g-name="Button"` elements.
@Component('Heading')
class Slider extends GondelBaseComponent {
    start() {
        this._ctx.innerHTML = PageHeading('Recommended products', 2);
    }
}

export default Slider;
