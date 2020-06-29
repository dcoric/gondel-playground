import './load-more-button.css';
export const LoadMoreButton = (props) => {
    const {title} = props;
    return (`
    <div class="load-more">
        <button class="load-more--button" id="load-more-btn">${title || 'Load More'}</button>
    </div>
    `);
}
