import React from 'react';
import CardData from './Components/CardData';
import SearchBox from './Components/searchBox'
import images from './images'
import './App.css';

   class App extends React.Component {
        constructor () {
           super () 
              this.state = {
                 images: images,
                 searchfield: '',
                 name: 'Majek',
                 country: 'Would you like to know more about me?'
               
               }

           this.handleClick = this.handleClick.bind(this)
      
        }
      
        onSearchChange = (event) => {
         this.setState({ searchfield: event.target.value })
       }
     
      
      
        handleClick() {
           this.setState({country: 'I am a web developer and I live in Sweden, thank you!'})
        }
      
   
      
          render () {
            const { images, searchfield } = this.state;
             const filteredImages = images.filter(image => {
             return image.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
        return (
          
          <div>  
           <h1> React Project</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardData images={filteredImages} />
           <div className="center">
            <h3>My name is {this.state.name}</h3>
            <h4> {this.state.country}</h4>
           <button className="btn" onClick={this.handleClick}>Click Me</button>
         </div>
         
   
           </div>
        )
          
        }
        }





export default App;
