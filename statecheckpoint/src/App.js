import React from "react";
import "./state.css";
import { Profile } from "./state";
import logo from "./user.jpg";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  state = {
    profiles: [
      {
        name: "TNour dhaouadi",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        profession: "etudiante",
        img: "https://picsum.photos/id/237/200/300",
      },
      {
        name: "TNour dhaouadi",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        profession: "medecin",
        img: { logo },
      },
      {
        name: "TNour dhaouadi",
        bio: "test",
        profession: "pharmacien",
        img: "https://picsum.photos/seed/picsum/200/300",
      },
    ],
  };
  render() {
    const { profiles } = this.state;
    return (
      <div className="card-container">
        <div className="first-row">
          {profiles.map((profile, index) => (
            <div className="col-for-card">
              <Profile key={index} profile={profile} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
