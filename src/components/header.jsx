import React from 'react' // импорт библиотеки
import styles from './header.module.css'

export default class Header extends React.Component {
  render() {
    return (
      <h1 className={styles.text}>
          BOX
      </h1>
    )
  }
}