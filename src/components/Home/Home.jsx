import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../../actions/hobby";
import HobbyList from "../pages/HobbyList";
import "bootstrap/dist/css/bootstrap.min.css";
import { listSandal } from "./mock-data";
import "./Home.scss";
import EyeButton from "../EyeButton/EyeButton";
import cartAction from "../../actions/cart.action";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

const Home = (props) => {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  console.log("Hobby List: ", hobbyList);

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="container-fluid">
      {/* <h1>REDUX HOOKS - Home Page</h1>

            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} /> */}
      <div className="row">
        {listSandal.map((list) => (
          <div key={list.id} className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={list.img}
                alt="Card image cap"
              />
              <div class="middle">
                <div class="button">
                    <button><i class="fas fa-shopping-cart"></i></button>
                    <button><i class="far fa-copy"></i></button>
                    <EyeButton initialEyeAction= {cartAction.Eye()} />
                </div>
              </div>
              
              
            </div>
            <div className="card-body" style={{ color: "black" }}>
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">{list.cost}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
