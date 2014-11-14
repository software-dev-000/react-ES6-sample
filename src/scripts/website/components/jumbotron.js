let Jumbotron = React.createClass({
  render() {
    return (<div className="jumbotron">
				<h1>{this.props.headline}</h1>
				<p>{this.props.subtext}</p>
			</div>);
  }
});

React.render((
    <section className="section">
	    <Jumbotron headline="React ES6" subtext="some subtext" />
    </section>),
document.getElementById('main'));