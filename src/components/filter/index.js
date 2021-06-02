import React from 'react';
import './filter.css';

const index = () => {
    return (
        <div className="filter">
            <div>
                <h5>Tags</h5>
                <div>
                    <p><input type="checkbox" name="task1" value="Custom Task"/> Custom Task </p>
                    <p><input type="checkbox" name="task2" value="Marketing & Sales"/> Marketing & Sales </p>
                    <p><input type="checkbox" name="task3" value="Integration"/> Integration </p>
                    <p><input type="checkbox" name="task4" value="Optimization"/> Optimization </p>
                    <p><input type="checkbox" name="task5" value="Deployment"/> Deployment </p>
                    <p><input type="checkbox" name="task6" value="Testing"/> Testing</p>
                </div>
            </div>

            <div>
                <h5>Task Price Range</h5>
                <div>
                    <p><input type="checkbox" name="task1" value="Custom Task"/> Less than N100 </p>
                    <p><input type="checkbox" name="task2" value="Marketing & Sales"/> N100 - N300 </p>
                    <p><input type="checkbox" name="task3" value="Integration"/> N301 - N900 </p>
                    <p><input type="checkbox" name="task4" value="Optimization"/> Above N900 </p>
                </div>
            </div>
        </div>
    )
}

export default index
