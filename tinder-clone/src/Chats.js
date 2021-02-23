import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats(){
    return(
        <div className='Chats'>
            <Chat
                name='Minerva'
                message='Take care of Hogwarts while i am outdoor..'
                
                profilePic='https://i.pinimg.com/originals/8d/a0/6a/8da06aed471141bee4fbe13fe8963888.jpg'
            />
            <Chat
                name='Grindelwald'
                message='what do you say about my offer? we will be stronger together.'
                profilePic='https://i.pinimg.com/originals/40/99/64/4099646ff8cfbeaf8bebbb93e8f8e4e1.jpg'
            />
            <Chat
                name=' Ms. Maxxim'
                message='Have you found Giants?'

                profilePic='https://pm1.narvii.com/6388/fff8307bd2e4a7e4c9d00c6d118139326ae06508_hq.jpg'
            />
            <Chat
                name='Hagrid'
                message='Take madam Maxxim with you? i have not heard from her yet'
                profilePic='https://i.pinimg.com/originals/61/a1/22/61a1221fec18eb1211d14dd4733f7f42.jpg'
            />

    </div>

    );
}



export default Chats;