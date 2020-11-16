import React from 'react';

class Card extends React.Component {
    static propTypes = {
    }
    addCard(card){
        this.setState(state => (
        {
            ...state.columns.cards,
            cards: card,
        }    
        ));
    }
    render() {
        return (
            <section className={styles.component}>
                
            </section>
        )
    }
}

export default Card;
