import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        item: ''
    }
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNew(this.state);
        this.setState({
            item: ''
        })

    }
    render() {
        return(
            <div className="todo-form-container">
                <form onSubmit={this.handleSubmit}>
                    
                    <input type="text" placeholder="Add New" onChange={this.handleChange} value={this.state.item}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default AddTodo;