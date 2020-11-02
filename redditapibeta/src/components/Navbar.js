import React from 'react';
import {useState} from 'react';
import * as ReactBootStrap from 'react-bootstrap';

import reddit from "../ReddditApi.js";
import "../components/StyleNav.css";


const NavbarComp = ({handleChange, item}) =>{

   
   const [myResults, setResults] = useState ([]);

   const redditSearch = () => { 
        reddit.search(item).then(results => {
        setResults(results);
    });
  }

    const handleClick = () => {
        
        redditSearch();
        
    }

    console.log(myResults);

    
    function truncateText(text, limit){
      const shortened = text.indexOf(' ', limit);
      if(shortened === -1) return text;
      return text.substring(0, shortened);
    }
   

    

    return(<React.Fragment>
        <div>
        <ReactBootStrap.Navbar className="" bg="dark" expand="lg">
            <ReactBootStrap.Form inline>
                <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
                <ReactBootStrap.Button variant="outline-success" onClick={handleClick} >Search</ReactBootStrap.Button>
            </ReactBootStrap.Form>
        </ReactBootStrap.Navbar>
        

    </div>

    <div id="CardContainer" className="Cards">{myResults.map((results, index) => (<ReactBootStrap.Card key={index} className="CardBody" style={{ width: '18rem' }}>
    <ReactBootStrap.Card.Img variant="top" src={results.preview ? results.preview.images[0].source.url : 'https://lh3.googleusercontent.com/8Vw-7MAm558750a4M55fiOlUf7lP2cYnFuqSWynrygIiyEEiQQDa_xxHKYOX83L0UD2T=s180'} />
    <ReactBootStrap.Card.Body >
    <ReactBootStrap.Card.Title>{results.subreddit}</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        {results.preview ? '' : truncateText(results.selftext, 100)}
      </ReactBootStrap.Card.Text>
      <ReactBootStrap.Button href={results.url} target='_blank' variant="primary">Open Post</ReactBootStrap.Button>
    </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>))}</div>
    </React.Fragment>);
}

export default NavbarComp;