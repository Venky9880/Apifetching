import React from 'react'
import { useEffect,useState } from 'react'
import "./ApiDesign.css"

const Desg=({id,avatar,first_name})=>
{
    return(
       <div id='card-head'>
         <div>
    <div id='border'>
    <h1 className='id'>{id}</h1>
        <img src={avatar} alt="" />
    </div>
        <h1>{first_name}</h1>
    </div>
       </div>
    )
}
const Gptapi = () => {
    const [api, setApi] = useState();
    const [state, setState] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
      fetch('https://reqres.in/api/users?page=2')
        .then((res) => res.json())
        .then((data) => setState(data.data));
    }, []);

    const Search = (event) => {
      setSearchTerm(event.target.value);
    };
    const searchCards = state.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
      <div>
        <div style={{marginLeft:"50px"}}>

        <input
          type="text"
          placeholder="SEARCH BY FIRST NAME"
          value={searchTerm}
          onChange={Search}
        />
            </div> <br /><br /> <br />
        <div id="card_head">
          {searchCards.map((user) => (
            <div key={user.id}>
              <Desg
                id={user.id}
                avatar={user.avatar}
                first_name={user.first_name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gptapi;