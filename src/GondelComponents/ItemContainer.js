import { Component, EventListener, GondelBaseComponent } from '@gondel/core';
import { getData } from '../util';
import { Product } from '../Components/Product';
import { LoadMoreButton } from '../Components/LoadMoreButton';

@Component('ItemContainer')
class ItemContainer extends GondelBaseComponent {
    constructor(props) {
        super(props);
        this.page = 1;
        this.limit = 3;
        this.items = [];
    }

    start() {
        // Initial load
        this.fetchData();

        // Load on scroll (if load more button is visible)
        window.addEventListener('scroll', () => {
            const element = document.querySelector('#load-more-btn');
            const position = element.getBoundingClientRect();

            // checking whether fully visible
            if(position.top >= 0 && position.bottom <= window.innerHeight) {
                this.page += 1;
                this.fetchData();
            }
        });
    }

    fetchData() {
        return getData('http://localhost:3000/products', {_page: this.page, _limit: this.limit}).then(data => {
            const htmlResults = data.map(item => Product(item));
            this.items.push([...htmlResults, '<div class="break"></div>'].join(''));
            const render = [
                ...this.items,
                htmlResults.length && htmlResults.length === this.limit
                    ? LoadMoreButton({title: 'Load more...'})
                    : ''
            ];
            this._ctx.innerHTML = render.join('');

        });
    }

    clearData() {
        this.items = [];
        this.page = 0;
    }

    @EventListener('click', 'button.load-more--button')
    _handleLoadMore(event) {
        this.page += 1;
        this.fetchData();
    }
}

export default ItemContainer;
