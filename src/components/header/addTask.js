import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState}from 'react';
import './header.css'


function AddTask(props) {
    const initialValues = {
        title:'',
        category:'',
        price:'',
        assigned:'',
        from:'',
        to:'',
        status:''
    }

    var [values, setValues] = useState(initialValues);

    const handleInputChange = e  => {
        var {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

   const handleFormSubmit = e => {
        e.preventDefault();
        props.addTask(values);
        closeForm();
    }

    const closeForm = e => {
        props.closeForm && props.closeForm(e);
    }

        if(!props.show){
            return null;
        }
        return (
        <div className="regForm">
            <form onSubmit={handleFormSubmit} autoComplete="off">
                <section>
                    <button onClick={e => {closeForm(e);}}>
                        <FontAwesomeIcon icon="times" size="2x"/>
                    </button>
                </section>
                <h3>Add New Task</h3>
                <p>Enter New Task details</p>

                {/* Task Title Field */}
                <div>
                    <p><label for="title"> <span>*</span> Task Title: </label></p>
                    <input type="text" 
                        required 
                        placeholder="Task title" 
                        name="title"
                        value={values.title}
                        onChange = {handleInputChange}
                    />
                </div>

                {/* Task Category Field */}
                <div>
                    <p><label for="category"><span>*</span> Task Category: </label></p>
                    <select required
                        name="category" 
                        value={values.category}
                        onChange = {handleInputChange}
                    >
                        <option value=""> </option>
                        <option value="Custom Task">Custom Task</option>
                        <option value="Marketing & Sales">Marketing &amp; Sales</option>
                        <option value="Integration">Integration</option>
                        <option value="Optimization">Optimization</option>
                        <option value="Deployment">Deployment</option>
                        <option value="Testing">Testing</option>
                    </select>
                </div>

                {/* Task Price Field */}
                <div>
                    <p><label for="price"><span>*</span>Task Price</label></p>
                    <input type="text" 
                        required 
                        placeholder="Task Price" 
                        name="price"
                        value={values.price}
                        onChange = {handleInputChange}
                    />
                </div>

                {/* Task Desgination Field */}
                <div>
                    <p><label for="assigned"><span>*</span>Assigned to: </label></p>
                    <select required 
                        name="assigned" 
                        value={values.assigned}
                        onChange = {handleInputChange}
                    >
                        <option></option>
                        <option value="Unassigned">Unassigned</option>
                        <option value="Adamu Musa">Adamu Musa</option>
                        <option value="Olayemi Toun">Olayemi Toun</option>
                        <option value="Babatunde Daniel">Babatunde Daniel</option>
                        <option value="Olalekan Stephen">Olalekan Stephen</option>
                        <option value="Olagunju Adewale">Olagunju Adewale</option>
                    </select>
                </div>

                {/* Task Delivery date Field */}
                <div className="delDate">
                    <h4><span>*</span> Delivery Period</h4>
                    <div>
                        <label for="from">From:</label>
                        <input type="date" 
                            required 
                            placeholder="0" 
                            name="from"
                            value={values.from}
                            onChange = {handleInputChange}
                        />
                        <label for="to">To:</label>
                        <input type="date" 
                            required 
                            placeholder="0"
                            name="to"
                            value={values.to}
                            onChange = {handleInputChange}

                        />
                    </div>
                </div>

                {/* Task Status Field */}
                <div>
                    <p><label for="status"><span>*</span>Status</label></p>
                    <select name="status"
                    required
                    value={values.status}
                    onChange = {handleInputChange}
                    >
                        <option value="" ></option>
                        <option value="Waiting approval">Waitng Approval</option>
                        <option value="In review">In review</option>
                        <option value="Verify">Verify</option>
                        <option value="In progress">In progress</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button>Add Task</button>
                </div>
            </form>
        </div>
        )
    }
export default AddTask