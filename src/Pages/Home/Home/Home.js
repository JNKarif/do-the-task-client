import React from 'react';

const Home = () => {
    return (

        <div className='text-center mx-auto w-1/2'>
            <p className='text-3xl my-3'>Add Your Tasks</p>
            <div className="control mb-3" >
                <input className="input" type="text" placeholder="Text input" />
                
<div className='place-content-end'>
<input class="button" type="submit" value="Submit"/>
<input class="button" type="reset" value="Reset"></input>  
</div>

            </div>
        </div>
    );
};

export default Home;