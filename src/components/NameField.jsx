var React = require('react');

var NameField = React.createClass({
    getInitialState: function (params) {
        return { type: "",  value: "" };
    },
    
    onChange: function (e) {
        this.setState({ value: e.target.value } );
    },
    
    clear: function () {
        this.setState({ value: "" } );
    },
    
    render: function () {
        return (
            <div className="form-group">
                <input className="form-control" onChange={this.onChange} value={this.state.value} placeholder={this.props.type + " Name"} />
            </div>
        );
    }
});

module.exports = NameField;