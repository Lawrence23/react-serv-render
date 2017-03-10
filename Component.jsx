var React = require('react');

module.exports = React.createClass({
	_handleClick: function() {
		alert('clicked');
	},
	render: function() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel='stylesheet' href='./style.css'/>
				</head>
				<body>
					<h1>{this.props.title}</h1>
					<p>Server side Rendering</p>
					<button onClick={this._handleClick}>Click me</button>
					<script dangerouslySetInnerHTML={{
						__html:  'window.PROPS=' + JSON.stringify(this.props)
					}} />
					<script src="/bundle.js" />
				</body>
			</html>
		);
	}
});