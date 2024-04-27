import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import star from './star.png';

const RatingComponent = ({ message }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

function BasicExample() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [review, setReview] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        switch (newRating) {
            case 1:
                setMessage('Nandni not like me');
                break;
            case 2:
                setMessage('But i like you Nandni ');
                break;
            case 3:
                setMessage('But Nandni not love me');
                break;
            case 4:
                setMessage('But i love you Nandni');
                break;
            case 5:
                setMessage('Your Are Mine Take OneStep Forward For Me i Will Do EveryThing For U');
                break;
            default:
                setMessage('');
        }
    };

    const handleCancel = () => {
        setRating(0);
        setMessage('');
        setText('');
        setReview('');
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        setReview(`Rating: ${rating}, Review: ${text}`);
    };

    return (
        <Container fluid >
            <Row className='justify-content-center'>
                <Col></Col>
                <Col className='title justify-content-center'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{
                                cursor: 'pointer',
                                color: star <= rating ? 'gold' : 'white',
                                fontSize: '40px', // Increase font size for larger stars
                                marginRight: '5px', // Add spacing between stars
                                animation: 'starAnimation 0.5s'
                            }}
                            onClick={() => handleRatingChange(star)}
                        >
                            &#9733;
                        </span>
                    ))}
                    <p className='msg'>{message}</p>
                    <textarea placeholder='Describe your experience' value={text} onChange={handleTextChange}></textarea>
                    <RatingComponent message={review} />
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                </Col>

                <Col>


                </Col>

            </Row>
            <Row>
                <Col className='titlee'>
                    <h2 className='xt'>Ek Barr Mil TO LO</h2>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Naraz to nhi ho yrr app </p>


                </Col>
                <Col className='titlee'>
                    <h2 className='xt'>kab bhi to mill looooooo</h2>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Hone bhi mat naraz kha jaoge hoke naraz </p>


                </Col>

                <Col className='titlee'>
                    <h2 className='xt'>Avlleen jada star ni bnri ki btadiya trko</h2>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>i will not allow third prsn to talk for meeee remind...</p>

                </Col>
            </Row>
            <Row>
                <Col className='titlee'>
                    <h2 className='xt'>Bbs meet me tommorow i dont have anytime after this </h2>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>

                    <br></br>
                    <p className='xt'>Naraz to nhi ho yrr app </p>


                </Col>
                <Col className='titlee'>
                    <h2 className='xt'>kab bhi to mill looooooo</h2>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>

                    <br></br>
                    <p className='xt'>Hone bhi mat naraz kha jaoge hoke naraz </p>


                </Col>

                <Col className='titlee'>
                    <h2 className='xt'>Avlleen jada star ni bnri ki btadiya trko</h2>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>

                    <br></br>
                    <p className='xt'>i will not allow third prsn to talk for meeee remind...</p>

                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;