import React, { useEffect, useState } from 'react';

const MyTasks = () => {

const [tasks, setTasks]=useState([]);

useEffect(()=>{
  fetch(`http://localhost:5000/taskslist`)
  .then(res=>res.json())
  .then(data=> setTasks(data))
  .catch(err=>console.error(err))
}
,[])


// useEffect(()=>{
  //   fetch(`http://localhost:5000/users/buyer/buyer`)
  //   .then(res=>res.json())
  //   .then(data=>setBuyers(data))
  //   .catch(err=>console.error(err))
  // },[])
    return (
        <div class='is-centered'>
          <div class='is-half'>
            
          
            <table class="table is-centered">
  <thead>
    <tr>
      <th><abbr title="Position">No.</abbr></th>
      <th>Task Name</th>
      <th><abbr title="Played">Task Picture</abbr></th>
      <th><abbr title="Played">Action</abbr></th>
      
    </tr>
  </thead>
  <tfoot>

{
  tasks && 
  <> {
    tasks.map((task, i)=>
      <tr key={i}>
      <th><abbr title="Position">{i+1}</abbr></th>
      <th>{task.task}</th>
      <th><abbr title="Played">{task.picture}</abbr></th>
      <th><abbr title="Played">
      <button class="button is-success">Done</button>
      <button class="button is-danger">Will do</button>
        </abbr></th>
    </tr>
    )
  }</>
 
}
    
   
  </tfoot>
  <tbody>
   
    
   
  </tbody>
</table>
</div>
        </div>
    );
};

export default MyTasks;