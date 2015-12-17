import React from 'react';
import classNames from 'classnames';

class ProductRow extends React.Component {

    constructor() {
        super();
    }

    render() {
        var style = classNames({"highlight-red": !this.props.product.stocked});

        return (
            <tr>
                <td className={style}>{this.props.product.name}</td>
                <td className={style}>{this.props.product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;