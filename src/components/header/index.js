import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddTask from './addTask'
import './header.css';
import {firebase} from '../../fire'

const db = firebase.database().ref();

export default class header extends Component {
    
    state={
        show: false
    };

    showReg = e => {
        this.setState({
            show: !this.state.show
        });
    };

    addTask = obj =>{
        db.child('tasks').push(
            obj,
            err=>{
                if(err)
                console.log(err);
            }
        )
        console.log(obj);
    }
    render() {
        return (
            <section>
                <header>
                    <div>
                        <img src="../img/getriLogo.png"  alt="logo"/>
                        <h3>GetriTracker</h3>
                    </div>
                    <div>
                        <button onClick={e => {this.showReg();}}>
                            <span>Add a new Task  </span>
                            <FontAwesomeIcon icon="plus"/>
                        </button>
                    </div>
                </header>
                <AddTask closeForm={this.showReg} show={this.state.show} addTask ={this.addTask}/>
            </section>
        )
    }
}
