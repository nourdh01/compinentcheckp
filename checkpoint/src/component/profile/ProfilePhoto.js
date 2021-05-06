import React from 'react';
import './profile.css'
import myImage from './profilephoto.jpg'
const MyFirstComponent = () => {
    return (
        <div className='image'>
<img src={myImage}alt='imgg' />
</div>
    );
}
export default MyFirstComponent;