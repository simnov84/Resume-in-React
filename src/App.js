import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  return (
    <div>
      <div>
        <h1>INTHUSAKTHIVEL</h1>
        <h2>B.Tech In Information Technology</h2>
      </div>

      <div>
        <h3>Objectives:</h3>
        <p>
          To work in a challenging environment by utilizing practical experience
          and academics skills for the continuous growth of the organization &
          personal career through achieving organizational objectives.
        </p>
      </div>

      <div>
        <h3>Skills:</h3>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>HTML5</Button>
          <Button>CSS3</Button>
          <Button>Javascript</Button>
          <Button>React JS</Button>
          <Button>Node JS</Button>
          <Button>Mongo DB</Button>
          <Button>MySQL</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3>Work History:</h3>
        <ul>
          <li>CUEMATH teacher ( July 2017 - Current)</li>
          <li>Freelancer in React JS (June 2021 - Current)</li>
        </ul>
      </div>

      <div>
        <h3> Academic Qualifications:</h3>
        <ul>
          <li>B.Tech (Information & Technology) : 71%</li>
          <li>Higher Secondary School : 85%</li>
          <li>Secondary School Leaving Certificate : 86.6%</li>
        </ul>
      </div>

      <div>
        <h3>Area of Interests:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Mongo DB</li>
          <li>React JS</li>
          <li>MySQL</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
