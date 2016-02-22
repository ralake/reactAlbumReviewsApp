import React from 'react'

const Review = React.createClass({
  render: function () {
    return (
      <div className='albumReview'>
        <span className='reviewLikes'>
          Likes - {this.props.likes}
        </span>
        <br />
        {this.props.text}
      </div>
    )
  }
})

module.exports = Review
