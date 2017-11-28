var Greeter = React.createClass({

    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is from a component'
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';

        var messageRef = this.refs.message
        var message = messageRef.value;
        messageRef.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }

        if (typeof message === 'string' && message.length > 0) {
            this.setState({
                message: message
            });
        }

    },

    render: function() {
        var name = this.state.name
        var message = this.state.message

        return (
            <div>
                <h1>{ name }</h1>
                <p>{ message }</p>

                <form onSubmit={this.onButtonClick}>
                    <input placeholder='name' type='text' ref='name' />
                    <input placeholder='message' type='text' ref='message' />
                    <br/>
                    <button>Submit Form</button>
                </form>
            </div>
        );
    }
});

var firstName = "Asimov"
var message = "online"

ReactDOM.render(
    <Greeter name={ firstName } message={ message }/>,
    document.getElementById('app')
);