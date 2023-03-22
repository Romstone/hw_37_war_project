import React, {Component} from 'react';
import Second_page from "./Second_page";

class Third_page extends Component
{
    cPoints = this.props.computerPoints;
    uPoints = this.props.userPoints;
    constructor(props)
    {
        super(props);
        this.state =
            {
                playAgain: false,
            }
    }

    playAgain = () =>
    {
        this.setState({playAgain: true});
    }

    render()
    {
        return (
            !this.state.playAgain ?
            <div className={'container last-field'}>
                <h1>{this.cPoints > this.uPoints ? 'LOSE' : this.cPoints < this.uPoints ? 'WIN' : 'SPARE'}</h1>
                <h2>{this.uPoints} - {this.cPoints}</h2>
                <button className={'btn btn-success'} onClick={this.playAgain}>Again?</button>
            </div> : <Second_page userName={this.props.userName}/>
        );
    }
}

export default Third_page;