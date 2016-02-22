import React from 'react'
import ReactDOM from 'react-dom'
import AlbumList from './components/albumList.js'

ReactDOM.render(
  <AlbumList url='api/albums'/>,
  document.getElementById('root')
)
