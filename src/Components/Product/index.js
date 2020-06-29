import './product.css';
export const Product = (data) => {
    const {id, label, sale, price} = data;
    const image = data['product-photo'];
    const description = data['short-description'];
    return(
        `
    <div id="product-id-${id}" class="product product--container">
        <div class="image">
            ${ElementImage(image, label)}
            ${SaleOverlay(sale)}
        </div>
        ${ElementTitle(label)}
        ${ElementDescription(description)}
    </div>`
    );
};

const ElementTitle = (title) => {
    return (`
    <div class="title--container">
        <h3>${title}</h3>
    </div>
    `);
};

const ElementImage = (imageURL, alt) => {
    return (`
    <div class="image--container">
        <img src="${imageURL}" alt="${alt}" />
    </div>
    `);
};

const ElementDescription = (description) => {
    return (`
    <div class="description--container">
        <span>${description}</span>
    </div>
    `);
};

const SaleOverlay = (itemIsOnSale) => {
    if (!itemIsOnSale) return '<div></div>';
    return (`
    <div class="sale--container">
        <img src="/img/sale.png" alt="sale" />
    </div>
    `);
};
