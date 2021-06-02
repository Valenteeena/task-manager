import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import EditTask from './editTask';
import './task.css';
import {firebase} from '../../fire'

const db = firebase.database().ref();


export default class tasks extends Component {
    state={
        show: false,
        tasks:{},
        currentId:''
    };

    showEdit = (e, id ) => {
        this.setCurrentId(id);
        this.setState({
            show: !this.state.show
        });
    };

    onDelete = id =>{
        if(window.confirm("Are you sure you want to delete this task?")){
            db.child(`tasks/${id}`).remove(
                err =>{
                if (err)
                    console.log(err)
                else
                    this.setState({
                        currentId: ''
                    })
                }
            )
        }
    }

    componentDidMount(){
        db.child('tasks').on('value', snapshot => {
            if(snapshot.val() != null){
                this.setState({
                    tasks: snapshot.val()
                })
            }
            else{
                this.setState({
                    tasks:{}
                })
            }
        })
    }
    render(){
        
        return (
            <section className="tasks">
                <p>Current</p>
                <table className="task-table">
                    {
                        Object.keys(this.state.tasks).map(id => {
                            return(
                            <tbody key={id}>
                                <tr>
                                    <td className="taskImg">
                                        <FontAwesomeIcon icon={["far", "clone"]} size="lg" color="#ccc"/>
                                    </td>
                                    <td className="category">
                                        <h4>{this.state.tasks[id].title}</h4>
                                        <p>{this.state.tasks[id].category}</p>
                                    </td>
                                    <td className="price">
                                        <h4>N{this.state.tasks[id].price}.00</h4>
                                        <p>Task price</p>
                                        <p>
                                            <b>Delivery: </b> 
                                            within 
                                            {/* {
                                                (this.state.tasks[id].from.getTime() - this.state.tasks[id].to.getTime()) 
                                                    /
                                                (1000 * 3600 * 24)
                                            }  */} 3
                                            days
                                        </p>
                                    </td>
                                    <td className="assigned">
                                        <img src="../img/user.png" width="40" alt="userimage"/>
                                        <div>
                                            <h4>{this.state.tasks[id].assigned}</h4>
                                            <p>Assigned to</p>
                                        </div>
                                    </td>

                                    <td className="status">
                                        <div>
                                            <div></div>
                                            <h4>{this.state.tasks[id].status}</h4>
                                        </div>
                                    </td>
                                    <td className="comment">
                                        <FontAwesomeIcon icon={["far", "comment-alt"]}/>
                                    </td>
                                    <td className="action">
                                        <div>
                                            <button><FontAwesomeIcon icon="ellipsis-h"/></button>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={["far", "trash-alt"]} color="red" className="actionIcon" onClick={() => { this.onDelete(id) }}/>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="edit" color="skyblue" className="actionIcon" onClick={e => {this.showEdit(id);}}/>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    
                                </tr>
                            </tbody>
                            )
                        })
                    }
                </table>
                <EditTask closeForm={this.showEdit} show={this.state.show}/>
            </section>
        )
    }
}
