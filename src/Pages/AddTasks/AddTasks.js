import React from 'react';

const AddTasks = () => {
    return (
        <div className='text-center mx-auto w-1/2'>
            <p className='text-3xl my-3'>Add Your Tasks</p>
            <div className="control mb-3" >
                <input className="input" type="text" placeholder="Text input" />

                <div class="file has-name" className='mt-3'>
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" />
                        <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Choose a file…
                            </span>
                        </span>
                        <span class="file-name">

                        </span>
                    </label>

                    <input class="button" type="submit" value="Submit" />
                    <input class="button" type="reset" value="Reset"></input>
                </div>

            </div>
        </div>
    );
};

export default AddTasks;