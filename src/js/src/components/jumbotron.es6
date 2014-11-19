const React = require('react');
import {BaseComponent} from './base.js';

class _Jumbotron extends BaseComponent {
    render() {
        return (<div className="jumbotron"><h1>{this.props.headline}</h1></div>);
    }
}
export const Jumbotron = React.createClass(_Jumbotron.prototype.reactifyClass());