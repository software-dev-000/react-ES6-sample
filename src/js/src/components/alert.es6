const React = require('react');
import {BaseComponent} from './base.js';

class _Alert extends BaseComponent {
    getClass(){
        return "alert" + (this.props.type ? (" alert-" + this.props.type) : "");
    }
    render() {
        return (<div className={this.getClass()} role="alert">{this.props.message}</div>);
    }
}
export const Alert = React.createClass(_Alert.prototype.reactifyClass());