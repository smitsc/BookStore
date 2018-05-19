import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './Market.css';

const masonryOptions = {
    transitionDuration: 0
};

export default class Gallery extends Component {
    render() {
        const imagesLoadedOptions = { background: '.my-bg-image-el' }
        const childElements = this.props.elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} />
                </li>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
