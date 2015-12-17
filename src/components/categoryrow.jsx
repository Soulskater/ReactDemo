import React from 'react';

class CategoryRow extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.name}</th>
            </tr>
        );
    }
}

export default CategoryRow;