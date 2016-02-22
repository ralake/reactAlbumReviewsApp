import React from 'react'

const Album = React.createClass({
  render: function () {
    return (
      <div className='album'>
        <h2 className='albumArtist'>
          {this.props.artist}
        </h2>
        <h3 className='albumTitle'>
          {this.props.title}
        </h3>
        <p className='albumReivew'>
          {this.props.review}
        </p>
      </div>
		)
  }
})

module.exports = Album
