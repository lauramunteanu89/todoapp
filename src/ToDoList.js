import React, { Component } from 'react';

class ToDoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default ToDoList;
//form on submit, calls addItem
// ref refers to the current element.
// value is stored as text in the currentElementobject.
//If you do not have onChangein the component, the field will be read only. We do not want this.
