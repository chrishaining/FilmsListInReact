import React, {Component} from 'react'
import Film from './Film'
import './FilmsList.css'

class FilmsList extends Component {

  render() {

    const filmNodes = this.props.films.map(film => {
      return (
        <Film key={film.id} name={film.name} url={film.url}></Film>
      )
    })
    return (
      <div className="films-list">
      <ul>
      {filmNodes}
      </ul>
      </div>
    )
  }
}

export default FilmsList
