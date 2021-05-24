import React from "react";
import "./state.css";
import { Button } from "@material-ui/core";
import {
  Card,
  CardTitle,
  CardImg,
  CardText,
  Row,
  Col,
  CardBody,
} from "reactstrap";
export class Profile extends React.Component {
  state = {
    isToggleOn: true,
    buttonname: "click to hide",
    date: new Date(),
    // this.handleClick = this.handleClick.bind(this);
  };

  handleClick = (e) => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      buttonname: !this.state.isToggleOn ? "click to hide" : "click to show",
    });
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div style={{ maxWidth: "250px" }}>
          <button className="btn btn-warning" onClick={this.handleClick}>
            {this.state.buttonname}
          </button>
          {this.state.isToggleOn ? (
            <div>
              <div>
                <div>
                  <CardImg top width="100%" src={this.props.profile.img} />
                  <h5>{this.props.profile.name}</h5>
                  <CardText>{this.props.profile.bio}</CardText>
                  <CardText>{this.props.profile.profession}</CardText>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
