import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
//import { bindActionCreators } from 'redux'

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               <QuoteCard quotes={this.props.state.quotes} removeQuote={this.props.removeQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote}/>
               
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = steate => {
//   return {
//     quotes: state.quotes
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     removeQuote: removeQuote,
//     upvoteQuote: upvoteQuote,
//     downvoteQuote: downvoteQuote
//   })
// }

export default connect(state => ({state}), {removeQuote, upvoteQuote, downvoteQuote})(Quotes);

//export default connect(mapStateToProps, mapDispatchToProps)(Quotes);


