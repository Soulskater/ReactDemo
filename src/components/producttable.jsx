import React from 'react';
import Immutable from 'immutable';

class ProductTable extends React.Component {

    constructor() {
        super();
    }

    render() {
        /* if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
         return;
         }*/
        let filterText = this.props.filterText;
        let rows = this.props.products.filter(productRow => {
            return !productRow.props.product || productRow.props.product.name.indexOf(filterText) !== -1;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }

}

export default ProductTable;