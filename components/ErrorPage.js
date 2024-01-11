import sadFood from '../assets/sadFood.jpg';
import {useRouteError} from 'react-router-dom';

const ErrorPage = () =>{
  const err = useRouteError();
  console.log(err)
    return (
      <div className="error_container">
        <div className="error_image">
            <img src={sadFood} alt="Oops!!! Something went wrong!!" />
        </div>
        <div className="error_content">
            <h1>Oops! Something went wrong!!</h1>
            <p className='error_description'>{err?.error?.message}</p>
        </div>
      </div>
    )
}

export default ErrorPage