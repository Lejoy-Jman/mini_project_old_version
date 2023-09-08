import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import Training from './create_training';
function Home() {

    return (
        <>
        <div className='mainpage'> 
            <div className="sidebar">
                <img src="logo.png" alt="Logo" className="logo" />
                <a href="#">Dashboard</a>
                <a href="#">Timesheet</a>
    
            </div>
        <div>
           <Training/>
        </div>
        </div>
        </>
    )
}
export default Home;