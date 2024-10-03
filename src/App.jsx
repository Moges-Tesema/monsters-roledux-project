import { Component, useState } from "react";
import { CardList } from "./components/card-list/card-list-component.jsx";
import { SearchBox } from "./components/search/search.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      fieldSearch: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((monsters) => this.setState({ monsters: monsters }));
  }

  render() {
    const { monsters, fieldSearch } = this.state;
    const filteredMonsters = monsters.filter((moster) =>
      moster.name.toLowerCase().includes(fieldSearch.toLowerCase())
    );
    return (
      <div className="bg-green-600 ">
        <h1 className="mx-auto font-extrabold text-center text-stone-800 mb-0 text-4xl italic ">
          monsters roledex
        </h1>

        <SearchBox
          placeholder="search monsters"
          handleChanger={(e) => this.setState({ fieldSearch: e.target.value })}
        />
        <CardList mosters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
