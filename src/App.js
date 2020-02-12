import React from "react";
import "./App.css";
import ContentPanel from "./components/ContentPanel.js";
import NavPanel from "./components/NavPanel";
import AddNewPanel from "./components/AddNewPanel.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  endpoint = "https://jsonplaceholder.typicode.com/posts";
  state = {
    mainObject: [],
    body: "",
    title: "",
    userId: ""
  };

  //Responsible for deleting records out of mainObject
  deleteHandler(e, i) {
    //Usuwanie pozorne za pomocą podanego API
    fetch(this.endpoint + `/${i}`, {
      method: "DELETE"
    });

    let currentObject = this.state.mainObject;
    let updatedObject = currentObject.filter(elem => {
      return elem.id !== i;
    });

    this.setState({
      mainObject: updatedObject
    });
  }

  //Metoda odpowiedzialna za aktalizacje state, przy
  updateInputValuesHandler(e, type) {
    this.setState({
      [type]: e.target.value
    });
  }

  updateObjectHandler() {
    //Aktualizowanie pozorne za pomocą podanego API
    fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        //Aktualizacja pozorna wyświetlona w konsoli
        console.log(json);

        //Aktualizacja obiektu : stworzenie instancji
        let currentId = this.state.mainObject.length + 1;
        let updatedObject = [
          ...this.state.mainObject,
          {
            id: currentId,
            title: this.state.title,
            body: this.state.body,
            userId: this.state.userId
          }
        ];

        //Aktualizowanie obiektu
        this.setState({
          mainObject: updatedObject,
          body: "",
          title: "",
          userId: ""
        });
      });
  }

  fetchDataFromEndPoint() {
    fetch(this.endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          mainObject: json
        });
      });
  }

  componentDidMount() {
    this.fetchDataFromEndPoint();
  }

  render() {
    let objectInstance = this.state.mainObject;
    return (
      <Router>
        <NavPanel />
        <Route
          path="/browse"
          render={() => (
            <ContentPanel
              myObject={objectInstance}
              myClick={(e, id) => this.deleteHandler(e, id)}
            />
          )}
        />
        <Route
          path="/add"
          render={() => (
            <AddNewPanel
              myClick={e => this.updateObjectHandler()}
              myInput={(e, type) => this.updateInputValuesHandler(e, type)}
              myBodyVal={this.state.body}
              myTitleVal={this.state.title}
              myUserIdVal={this.state.userId}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
