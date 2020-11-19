import React from 'react';
import styles from './Column.scss';
// import {settings} from '../../data/dataStore.js';
// import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span> 
        </h3>

        <div className={styles.columns}>
          {cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
          
        {/*<div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div> */}
      </section>
    );
  }
}

export default Column;
