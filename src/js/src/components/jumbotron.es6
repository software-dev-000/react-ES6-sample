const React = require('react');
import {Reactifyable} from './base/reactifyable.js';

class _Jumbotron extends Reactifyable {
    render() {
        return (<div className="jumbotron"><h1>{this.props.headline}</h1></div>);
    }
}
export const Jumbotron = React.createClass(_Jumbotron.prototype.reactifyClass());