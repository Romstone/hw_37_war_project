import React, {Component} from 'react';
import Second_page from "./Second_page";

class FirstPage extends Component {
    constructor(props)
    {
        super(props);
        this.state =
            {
                userName: '',
            }
    }

    changeName = (name) =>
    {
        this.setState({userName: name});
    }

    render() {
        return (
            !this.state.userName ?
            <div className={'container form'}>
                <h1>Ready for WAR</h1>
                <form action="#" onSubmit={(e) => {
                    e.preventDefault();
                    this.changeName(e.target.name.value);
                }}>
                    <input type="text" placeholder={'Enter your name'} id={'name'}/>
                    <br/>
                    <button className={'btn btn-success btn-form'}>Start</button>
                </form>
            </div> : <Second_page userName={this.state.userName}/>
        );
    }
};

export default FirstPage;