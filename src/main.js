var HomeComponent = React.createClass({
    render: function() {
        return (
            React.createElement("div", null,
                React.createElement("h1", null, "Home page"),
                React.createElement("p", null, React.createElement("a", {href: "/one"}, "Page one")),
                React.createElement("p", null, React.createElement("a", {href: "/two"}, "Page two")),
                React.createElement("p", null, React.createElement("a", {href: "/three"}, "Page three"))
            )
        );
    }
});

var PageComponent = React.createClass({
    render: function() {
        return (
            React.createElement("div", null,
                React.createElement("h1", null, "Page ", this.props.number),
                React.createElement("p", null, React.createElement("a", {href: "/"}, "Home"),
                React.createElement("p", null, React.createElement("a", {href: "/one"}, "Page one")),
                React.createElement("p", null, React.createElement("a", {href: "/two"}, "Page two")),
                React.createElement("p", null, React.createElement("a", {href: "/three"}, "Page three"))
            )
        );
    }
});

var App = React.createClass({

    mixins: [reactMiniRouter.RouterMixin],

    routes: {
        '/': 'pageHome',
        '/one': 'pageOne',
        '/two': 'pageTwo',
        '/three': 'pageThree'
    },

    render: function() {
        React.initializeTouchEvents(true);
        return this.renderCurrentRoute();
    },

    pageHome: function() {
        return React.createElement(HomeComponent, null, document.getElementById('app'));
    },

    pageOne: function() {
        return React.createElement(PageComponent, {number: 1}, document.getElementById('app'));
    },

    pageTwo: function() {
        return React.createElement(PageComponent, {number: 2}, document.getElementById('app'));
    },

    pageThree: function() {
        return React.createElement(PageComponent, {number: 3}, document.getElementById('app'));
    }

});

React.render(
    React.createElement( App, {history: true} ),
    document.getElementById('app')
);
