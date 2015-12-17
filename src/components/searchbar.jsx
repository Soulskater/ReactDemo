import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        let filterTextInput = ReactDom.findDOMNode(this.refs['filterTextInput']);
        let inStockOnlyInput = ReactDom.findDOMNode(this.refs['inStockOnlyInput']);
        this.props.onUserInput (
            filterTextInput.value,
            inStockOnlyInput.checked
        );
    }

    render() {
        let inputClass = classNames("search-bar");
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    className={inputClass}
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;