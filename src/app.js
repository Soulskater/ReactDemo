import React from 'react';
import ReactDom from 'react-dom';
import FilterableProductTable from './components/filterableProductTable.jsx';

// init shell
renderShell();

function renderShell() {
    document.addEventListener("DOMContentLoaded", function (event) {
        var shell = document.getElementById('app');
        //shell.className = 'app-shell';
        ReactDom.render(<FilterableProductTable/>, shell);
    });
}