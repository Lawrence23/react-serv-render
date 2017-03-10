var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	displayName: 'Layout',
	_handleClick: function() {
		alert('clicked');
	},
	render: function() {
		var custom = this.props.custom;
		return (
			<html>
				<head>
					<title>{custom.title}</title>
					<link rel='stylesheet' href='./style.css'/>
				</head>
				<body>
					<h1>{custom.title}</h1>
					<p>Server side Rendering</p>
					<button onClick={this._handleClick}>Click me</button>
					{this.props.children}
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
					<script dangerouslySetInnerHTML={{
						__html:  'window.PROPS=' + JSON.stringify(custom)
					}} />
					<script src="/bundle.js" />
				</body>
			</html>
		);
	}
});