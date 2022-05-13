import React from 'react';
import { Result } from 'antd'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <section className="mb-5" 
            style={{ backgroundSize: '100%',backgroundRepeat:'no-repeat',backgroundColor:'fff',minHeight:'700px'}} >
              
      <div className='m-5' >
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."

        />
        <Link to='/'><button className='btn btn-secondary mt-4' >Back Home</button></Link>
      </div>
      </section>
  );
};

export default NoMatch;