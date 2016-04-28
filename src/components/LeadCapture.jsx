var React = require('react');

var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
    clear: function () {
        this.refs.fieldEmail.clear();
        this.refs.fieldName.clear();
    },
    
    onSubmit: function (e) {
        if (!this.refs.fieldEmail.state.valid){
            alert("Email inválido");            
        }        
        else{
            var httpRequestBody = {
              email: this.refs.fieldEmail.state.value,
              firtsName: this.refs.fieldName.state.value
            };
            
            this.clear();
        }
    },
    
    
    
    render: function () {               
        return (
          <div className="col-sm-3" >
             <div className="panel panel-default" >
                <div className="panel-body" >
                
                    <NameField ref="fieldName" type="First" />
                    <EmailField ref="fieldEmail" />
                    
                    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>
             </div>
          </div>  
        );     
    }
});

module.exports = LeadCapture;