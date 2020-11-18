import React from 'react';
import styles from './Card.scss'
import Column from '../Column/Column.js';

class Card extends React.Component {
    static propTypes = {
    }
    
    render() {
        return (
            <section className={styles.component}>
                <h3>{this.props.title}</h3>
            </section>
        )
    }
}

export default Card;
