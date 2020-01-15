import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./Home";
import { Room709 } from "./Room709";
import { Room806 } from "./Room806";
import { List } from "./styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <List>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/room/709">Room709</Link>
          </List>
          <List>
            <Link to="/room/806">Room806</Link>
          </List>
        </ul>
      </nav>

      <Switch>
        <Route path="/room/806">
          <Room806 />
        </Route>
        <Route path="/room/709">
          <Room709 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root"),
);
