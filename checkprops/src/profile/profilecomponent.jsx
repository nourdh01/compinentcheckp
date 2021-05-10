import React from 'react';
import PropTypes from "prop-types"; 
import './profile.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Profile (props) {
    
    return (
        <div className="card">
            <CardDeck>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title> full name : {props.fullname} </Card.Title>
            <Card.Text>My bio : {props.bio} </Card.Text>
            <Card.Text>Profession : {props.profession}</Card.Text>
 <div className='image'> {props.children} </div> 
 </Card.Body>
 </Card>
 </CardDeck>
</div>
    );
    }

Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string

  };
export default Profile ;