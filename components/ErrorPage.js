import sadFood from '../assets/sadFood.jpg';

const ErrorPage = () =>{
    return (
      <div className="error_container">
        <div className="error_image">
            <img src={sadFood} alt="Oops!!! Something went wrong!!" />
        </div>
        <div className="error_content">
            <h1>Oops! Something went wrong!!</h1>
        </div>
      </div>
    )
}

export default ErrorPage