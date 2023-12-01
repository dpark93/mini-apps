import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState();
  const [input, setInput] = useState();
  const [movie, setMovie] = useState('Home');
  const [userInput, setUserInput] = useState()
  const [notUser, setNotUser] = useState()
  const [userAdded, setUserAdded] = useState()

  useEffect(() =>{
    if(movie == 'Home'){
    fetch('http://localhost:8081/movies')
    .then(res => res.json())
    .then(data => setData(data))
    } else {
      fetch(`http://localhost:8081/movies/${movie}`)
      .then(res => res.json())
      .then(data => setData(data))
    }
},[data])



  const filtered = () => {
      const filteredMovie = data.filter((movie) => movie.userAdded !== true );
      return filteredMovie;
  }

  
  const filteredUser = () => {
    const filteredMovieUser = data.filter((movie) => movie.userAdded === true );
    return filteredMovieUser;
}

const searchMovie = (title) =>{
  if(input == null){
    alert('Please Enter a Title')
  } else{
  setMovie(title);
  setInput('');
  }
}


const addMovie = (userInput) => {
  fetch('http://localhost:8081/movies', {
    method: 'POST',
    body: JSON.stringify({
      title: userInput,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}




  return !data ? null :  ((
    <div className="App">
      <header className="App-header">
        <h2 onClick={()=>{setMovie('Home')}}>MOVIES</h2>
          <div className='searchbar'>
          <input type='text' placeholder='Search Movies' onChange={(e) => {setInput(e.target.value)}} value={input}></input>
          <button onClick={()=>{searchMovie(input)}}>Search</button>
          </div>
        <ul>
          {filtered().map((movie, index) => <li key={index}>{movie.title}</li>)}
        </ul>

        <h2>Your List</h2>
            <div className='addbar'>
              <input type='text' placeholder='Type Movie to Add' onChange={(e) => {setUserInput(e.target.value)}} value={userInput}></input>
              <button onClick={()=>{addMovie(userInput)}}>Add</button>
            </div>

            <ul>
             {filteredUser().map((movie, index) => <li key={index}>{movie.title}</li>)}
            </ul>
      </header>
    </div>
  ));
}

export default App;
