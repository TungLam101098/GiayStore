import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../../actions/hobby';
import HobbyList from '../pages/HobbyList';

const randomNumber = () => {
    return 1000+ Math.trunc((Math.random() * 9000));
}

function Home(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();
    console.log('Hobby List: ', hobbyList);

    const handleAddHobbyClick = () => {
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }
        const action = addNewHobby(newHobby);
        dispatch(action);
    }


    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div>
            <h1>REDUX HOOKS - Home Page</h1>

            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
        </div>
    );
}

export default Home;