import '../styles/Card.css';
import { useHistory } from 'react-router-dom';

const Card = ({ course }) => {
  const history = useHistory();

  const cardClicked = async () => {
    const response = await fetch(`http://localhost:8080/cardclicked/${course['subject_code']}`, {
      method: "GET",
    });

    const data = await response.json();
    if (data.success) {
      history.push('/coursedetails', { courseDetails: data.course });
    } else {
      console.log(data.message);
    }
  };

  return (
    <div className="card" onClick={cardClicked}>
      <div className="card-content">
        <h2>{course['subject_name']}</h2>
        <h4>By : {course['subject_teacher']}</h4>
        <h4>Code : {course['subject_code']}</h4>
      </div>
    </div>
  );
};

export default Card;
