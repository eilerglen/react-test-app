import React from 'react' // импорт библиотеки
import dogImageStyles from './dog-image.module.css'


class DogImage extends React.Component {
  render() {
    return (

      <div className={dogImageStyles.card}>
        <img 
          className={dogImageStyles.image}
          src = {this.props.image} 
          alt='Грустная собачка'/>
        <h2 className={dogImageStyles.image}>{this.props.name}</h2>
        <span className={dogImageStyles.image}>{this.props.description}</span>
      </div>
      
    )
  }
}

export default DogImage