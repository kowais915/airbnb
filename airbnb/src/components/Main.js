import grid from "../images/grid.png"
const Main = () => {
    return (
       <main>
           <img className = "grid" src={grid}/>
           <div className="title">
               <h1>Online Experiences</h1>
               <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
           </div>
       </main>
    );
}

export default Main;