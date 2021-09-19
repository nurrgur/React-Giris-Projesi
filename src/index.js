import React from "react";
import ReactDOM from "react-dom";
import Card from "./Components/Card";
import Collapse from "./Components/Collapse";

//PROPS
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                // cardTitle="Card Title 1"
                cardText="Burası birinci kart"
                updatedTime="Last updated 1 min ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title 2"
                cardText="Burası ikinci kart"
                updatedTime="Last updated 2 min ago"
                image="https://picsum.photos/id/2/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title 3"
                cardText="Burası üçüncü kart"
                updatedTime="Last updated 3 min ago"
                image="https://picsum.photos/id/3/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
