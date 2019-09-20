import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
//import { bindActionCreators } from 'redux'

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: '',
    votes: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State

    // uber dymatic
    this.setState({
      [event.target.name]: event.target.value

      //event.target = <input name='content', value=(user_input/state) cb>
      //event.target.name = content (name='content')
    })
  }

  // Not dynamic way but if you want to set each state
  // handleContentChange = (event) => {
  //   this.setState({
  //     content: event.target.value
  //     })
  // }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    const quote = {
      author: this.state.author,
      content: this.state.content,
      id: uuid(),
      votes: 0
    };
    // Pass quote object to action creator
    // Update component state to return to default state
    this.props.addQuote(quote)

    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control" 
                        value={this.state.content}
                        name="content"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={this.handleOnChange}
                        //onChange={this.handleContentChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


//Using bindActionCreators
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     addQuote: addQuote
//   },dispatch)
// }

export default connect(state => ({state}), {addQuote})(QuoteForm);

//When you use mapDispatchToProps
// export default connect(state => ({state}), mapDispatchToProps)(QuoteForm);
