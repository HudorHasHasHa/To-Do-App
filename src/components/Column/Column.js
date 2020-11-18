import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
    state = {
        cards: this.props.cards || {},
        icon: this.props.icon,
    }
    static propTypes = {
        //title: PropTypes.node,
    }

    addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
              }
            ]
          }
        ));
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.titleColumn}
                    <span className={styles.icon}>
                            <Icon name={this.state.icon} />
                    </span> 
                </h3>

                <div className={styles.columns}>
                    {this.state.cards.map(({title, ...cardsProps}) => (
                        <Card title={title} {...cardsProps} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
                </div>
            </section>
        )
    }
}

export default Column;
