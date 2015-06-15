var React = require('react');

module.exports = React.createClass({
	displayName: 'TabList',

	render: function () {
		return React.DOM.ul({
			  className: 'tabs__list',
        role: 'tab-list'
      },
      this.props.children
		);
	}
});
