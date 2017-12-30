import React, { Component } from 'react';

class About extends Component {
  constructor (props) {
  super(props);
  this.state = { clientRender :""};  
};

info(){ alert("This is a test");} 


render() {
     return (
        <div  ref = "container" className="aboutContainer">
          <h1>Who we are</h1>
          <div className = "peopleContainer">
            <section className = "diegoContainer">
              <h2>Diego Burlando</h2>           
              <div  className = "flame">          
                <div></div>
                <div></div>
              </div>
              <p onClick = {()=>{this.info()}}>Tech Lead</p>
              <hr/>
              <p>My passion for software development has led me to contribute to many different projects. I specialise in mentoring and motivating agile
              teams and my presence hands on code facilitates the rapid delivery with best practices and solid principles.</p>
              <p></p>
                    <h3>Interests & hobbies</h3>
              <ul>
                <li>classic guitar playing</li>
                <li>DIY</li>
                <li>Health</li>
              </ul>
            </section>
            <section className = "mariaContainer">
              <h2>Maria Burlando</h2>
              <div className = "flame">          
                <div></div>
                <div></div>
              </div>
              
              <p>Web Developer</p>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dapibus metus, ac venenatis eros. Nulla iaculis luctus massa, fringilla tempus ligula lacinia at. Etiam tincidunt sit amet lectus non dignissim. Integer fermentum, massa quis dictum malesuada, purus purus vulputate urna, in gravida velit est accumsan massa. Cras eget ante nulla. Suspendisse ullamcorper, nisl id interdum laoreet, metus libero suscipit sem, non ultricies est tellus euismod ante. Maecenas commodo fringilla sapien, in hendrerit diam fermentum id. Mauris lobortis lacinia diam vel placerat. Aliquam condimentum dui id tristique placerat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dapibus metus, ac venenatis eros. Nulla iaculis luctus massa, fringilla tempus ligula lacinia at. Etiam tincidunt sit amet lectus non dignissim. Integer fermentum, massa quis dictum malesuada, purus purus vulputate urna, in gravida velit est accumsan massa. Cras eget ante nulla. Suspendisse ullamcorper, nisl id interdum laoreet, metus libero suscipit sem, non ultricies est tellus euismod ante. Maecenas commodo fringilla sapien, in hendrerit diam fermentum id. Mauris lobortis lacinia diam vel placerat. Aliquam condimentum dui id tristique placerat.</p>
                    <h3>Interests & hobbies</h3>
              <ul>
                <li>flute playing</li>
                <li>writing stories</li>
                <li>drawing and designing</li>
              </ul>
            </section>
            
          </div>        
          
          
        </div>
       
        )

}
}
export default About;