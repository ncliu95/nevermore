import '../App.css';
import '../cssFiles/Home.css';

function Home() {
  

return (
  <div className="Home">
    <div className="home-header">
        <div className="home-header-left">
            <img className='home-image' src='./assets/image0.jpg'></img>
        </div>

        <div className='home-header-middle'>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <p>Use the navigation bar to explore other pages.</p>
        </div>

        <div className="home-header-right">
            <img className='home-image' src='./assets/IMG_5964.jpeg'></img>
        </div>
    </div>
        <br />
    <div className='about-box'></div>
      <h4>About This Project</h4>
      <p>This website was made by two interns, Benjamin Wang and William Koglin, during the summer of their junior year of high school.</p>

  </div>
);
}
export default Home;