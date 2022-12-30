import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddTasks = () => {

const navigate= useNavigate()

const handleSubmit = (event)=>{
    event.preventDefault()
    const form= event.target;
    const task = form.task.value;
    const picture = form.picture.files[0];  // get the first file from the list of files
  
    const formData = new FormData();  // create a new FormData object
    formData.append('task', task);  // add the task field to the FormData object
    formData.append('picture', picture);  // add the picture file to the FormData object
  
    fetch('http://localhost:5000/taskslist', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'  // set the correct Content-Type header
      },
      body: formData  // pass the FormData object directly as the body
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      if (data.acknowledged) {
          
        toast.success(`${task} added successfully`)
        navigate('/myTasks')
      }
    })
  }
  
    return (
        <div className='text-center mx-auto w-1/2'>
            <p className='text-3xl my-3'>Add Your Tasks</p>
            <form onSubmit={handleSubmit} className="control mb-3" >
                <input className="input" type="text" placeholder="Text input" name='task' />

                <div class="file has-name" className='mt-3'>
                    <label class="file-label">
                        <input class="file-input" type="file" name="picture" />
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

            </form>
        </div>
    );
};

export default AddTasks;