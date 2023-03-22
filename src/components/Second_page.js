import React, {Component} from 'react';
import {deckShuffler} from "../utils/instruments";
import {deck} from "../utils/constants";
import Third_page from "./Third_page";

class SecondPage extends Component
{
    deck = deckShuffler([...deck]);
    computerDeck = this.deck.slice(this.deck.length / 2);
    userDeck = this.deck.slice(0, this.deck.length / 2);
    constructor(props)
    {
        super(props);
        this.state =
            {
                compCurrentCard: '',
                userCurrentCard: '',
                computerPoints: 0,
                userPoints: 0,
                gameOver: false,
            }
    }

    componentDidMount()
    {
        this.putCards();
    }

    putCards = () =>
    {
        if (this.computerDeck.length > 1)
        {
            const compCard = this.computerDeck.pop();
            const userCard = this.userDeck.pop();
            if (compCard.rank > userCard.rank)
                this.setState({...this.state, compCurrentCard: compCard, userCurrentCard: userCard, computerPoints: this.state.computerPoints+1});
            else if (compCard.rank < userCard.rank)
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
                    <div className={'comp-card'}>
                        <h4>{this.state.compCurrentCard.rank}</h4>
                        <h4>{this.state.compCurrentCard.suit}</h4>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className={'user-card'}>
                        <h4>{this.state.userCurrentCard.rank}</h4>
                        <h4>{this.state.userCurrentCard.suit}</h4>
                    </div>
                    <h1 className={'user-name'}>{this.props.userName}</h1>
                    <h3 className={'user-points'}>Points: {this.state.userPoints}</h3>
                </div>
                <button className={'btn btn-success btn-next'} onClick={this.putCards}>Next</button>
            </div> : <Third_page computerPoints={this.state.computerPoints} userPoints={this.state.userPoints} playAgain={this.playAgain} userName={this.props.userName}/>
        );
    }
}

export default SecondPage;