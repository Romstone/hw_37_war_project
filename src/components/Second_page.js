import React, {Component} from 'react';
//use this when api doesn't work
// import {deckShuffler} from "../utils/instruments";
// import {deck} from "../utils/constants";
import Third_page from "./Third_page";
import DataRepository from "../repository/repository";

class SecondPage extends Component
{
    dataRepository = new DataRepository();

    /*deck = deckShuffler([...deck]);
    computerDeck = this.deck.slice(this.deck.length / 2);
    userDeck = this.deck.slice(0, this.deck.length / 2);*/
    constructor(props)
    {
        super(props);
        this.state =
            {
                compDeck: [],
                userDeck: [],
                compCurrentCard: '',
                userCurrentCard: '',
                computerPoints: 0,
                userPoints: 0,
                gameOver: false,
            }
    }

    async componentDidMount()
    {
        const deck = await this.dataRepository.getDeck();
        console.log(deck);
        const compDeck = deck.slice(deck.length / 2);
        const userDeck = deck.slice(0, deck.length / 2);
        console.log(compDeck, userDeck);
        this.setState({...this.state, compDeck, userDeck});
    }

    putCards = () =>
    {
        if (this.state.compDeck.length > 0)
        {
            const compCard = this.state.compDeck.pop();
            const userCard = this.state.userDeck.pop();
            console.log(`cCard: ${compCard.value}, uCard: ${userCard.value}`);
            if (+compCard.value > +userCard.value)
                this.setState({...this.state, compCurrentCard: compCard, userCurrentCard: userCard, computerPoints: this.state.computerPoints+1});
            else if (+compCard.value < +userCard.value)
                this.setState({...this.state, compCurrentCard: compCard, userCurrentCard: userCard, userPoints: this.state.userPoints+1});
            else
                this.setState({...this.state, compCurrentCard: compCard, userCurrentCard: userCard});
        } else
        {
            this.setState({...this.state, gameOver: true});
        }
    }

    render()
    {
        return (
            !this.state.gameOver ?
            <div className={'container field'}>
                <div className={'half-field'}>
                    <h1>Computer</h1>
                    <h3>Points: {this.state.computerPoints}</h3>
                    <div className={'comp-card'} style={{backgroundImage: `url(${this.state.compCurrentCard.image})`, backgroundSize: '150px'}}></div>
                </div>
                <hr/>
                <div>
                    <div className={'user-card'} style={{backgroundImage: `url(${this.state.userCurrentCard.image})`, backgroundSize: '150px'}}></div>
                    <h1 className={'user-name'}>{this.props.userName}</h1>
                    <h3 className={'user-points'}>Points: {this.state.userPoints}</h3>
                </div>
                <button className={'btn btn-success btn-next'} onClick={this.putCards}>Next</button>
            </div> : <Third_page computerPoints={this.state.computerPoints} userPoints={this.state.userPoints} playAgain={this.playAgain} userName={this.props.userName}/>
        );
    }
}

export default SecondPage;