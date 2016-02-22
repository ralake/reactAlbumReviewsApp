import React from 'react'
import Album from './album.js'
import $ from 'jquery'

const AlbumList = React.createClass({
  getInitialState: function () {
    return {data: []}
  },

  componentDidMount: function () {
    var self = this
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        self.setState({data: data})
      },
      error: function (chr, status, error) {
        console.error(error)
      }
    })
  },

  render: function () {
    var albums = this.state.data.map(function (album) {
      return (
        <Album artist={album.artist} title={album.title} key={album.id} review={album.review} />
      )
    })
    return (
      <div className='albumList' data={this.state.data}>
        {albums}
      </div>
    )
  }
})

module.exports = AlbumList
