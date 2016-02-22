import React from 'react'

const ReviewForm = React.createClass({
  getInitialState: function () {
    return {author: '', text: ''}
  },

  handleAuthorChange: function (event) {
    this.setState({author: event.target.value})
  },

  handleTextChange: function (event) {
    this.setState({text: event.target.value})
  },

  handleSubmit: function (event) {
    event.preventDefault()
    let author = this.state.author
    let text = this.state.text
    let review = {author: author, text: text, albumId: this.props.albumId}
    if (!author || !text) return
    this.props.onReviewSubmit(review)
    this.setState(review)
  },

  render: function () {
    return (
      <form className='reviewForm' onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Your name...'
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type='text'
          placeholder='write review here...'
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type='submit' value='Post' />
      </form>
    )
  }
})

module.exports = ReviewForm
