import React from 'react';
import Products from './Products.js';

var texts = ['something', 'other things', 'thingimabob', 'thingthing'];
var imgs = ['./beetle1.svg', './beetle2.svg', 'beetle.svg', 'beetle4.svg'];

var items = new Array(texts.length)

for (var i = 0; i < items.length; i++) {
    var item = new Object()
    item.key = i;
    item.text = texts[i];
    item.img = imgs[i];
    items[i] = item;
}

class Product_list extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Products entries={this.items} />
            items[0].text
        )
    }
}

console.log(items);

export default Product_list;