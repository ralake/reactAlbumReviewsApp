import React from 'react'
import Album from './album'
import Review from './review'
import ReviewForm from './reviewForm'
import $ from 'jquery'

const AlbumList = React.createClass({
  getInitialState: function () {
    return {data: []}
  },

  loadAlbumsFromServer: function () {
    let self = this
    $.ajax({
      url: this.props.url,
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (data) {
        self.setState({data: data})
      },
      error: function (xhr, status, error) {
        console.error(error)
      }
    })
  },

  componentDidMount: function () {
    this.loadAlbumsFromServer()
    setInterval(this.loadAlbumsFromServer, this.props.interval)
  },

  handleReviewSubmit: function (review) {
    let self = this
    $.ajax({
      url: this.props.url,
      type: 'POST',
      dataType: 'json',
      data: review,
      cache: false,
      success: function (data) {
        self.setState({data: data})
      },
      error: function (xhr, status, error) {
        console.error(error)
      }
    })
  },

  render: function () {
    let self = this
    let albums = this.state.data.map(function (album) {
      let reviews = album.reviews.map(function (review) {
        return <Review key={review.id} likes={review.likes} text={review.text} albumId={album.id}/>
      })
      return (
        <Album artist={album.artist} title={album.title} key={album.id}>
          <ReviewForm onReviewSubmit={self.handleReviewSubmit} albumId={album.id} />
          {reviews}
        </Album>
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
