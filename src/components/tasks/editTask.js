import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../header/header.css'


export class editTask extends Component {
    closeForm = e => {
        this.props.closeForm && this.props.closeForm(e);
    }

    render() {
        if(!this.props.show){
            return null;
        }
        return (
        <div className="regForm">
            <form>
                <section>
                    <button onClick={e => {this.closeForm(e);}}>
                        <FontAwesomeIcon icon="times" size="2x"/>
                    </button>
                </section>
                <h3>Edit Task</h3>
                <p>Edit Task details</p>

                <div>
                    <p><label for="title"> <span>*</span> Task Title: </label></p>
                    <input type="text" required placeholder="Task title" name="title"/>
                </div>

                <div>
                    <p><label for="category"><span>*</span> Task Category: </label></p>
                    <select required name="category">
                        <option value="">Category: </option>
                        <option value="Custom Task">Custom Task</option>
                        <option value="Marketing & Sales">Marketing &amp; Sales</option>
                        <option value="Integration">Integration</option>
                        <option value="Optimization">Optimization</option>
                        <option value="Deployment">Deployment</option>
                        <option value="Testing">Testing</option>
                    </select>
                </div>
                <div>
                    <p><label for="price"><span>*</span>Task Price</label></p>
                    <input type="text" required placeholder="Task Price" name="price"/>
                </div>
                <div>
                    <p><label for="assigned"><span>*</span>Assigned to: </label></p>
                    <select required name="assigned" >
                        <option value=""> </option>
                        <option value="Adamu Musa">Adamu Musa</option>
                        <option value="Adamu Musa">Adamu Musa</option>
                        <option value="Adamu Musa">Adamu Musa</option>
                    </select>
                </div>
                <div className="delDate">
                    <h4><span>*</span> Delivery Period</h4>
                    <div>
                        <label for="from">From:</label>
                        <input type="number" required placeholder="0" name="from"/>
                        <label for="to">To:</label>
                        <input type="number" required placeholder="0" name="to"/>
                    </div>
                </div>
                <div>
                    <p><label for="status"><span>*</span>Status</label></p>
                    <select required name="status">
                        <option value="Waiting approval">Waitng Approval</option>
                        <option value="In review">In review</option>
                        <option value="Verify">Verify</option>
                        <option value="In progress">In progress</option>
                    </select>
                </div>
                <div>
                    <button>Add Task</button>
                </div>
            </form>
        </div>
        )
    }
}

export default editTask
