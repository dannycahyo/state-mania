import { CartRedux } from "@containers/CartRedux";
import { CartZustand } from "@containers/CartZustand";
import { PostRedux } from "@containers/PostRedux";
import { PostZustand } from "@containers/PostZustand";

import "@styles/app.css";

function App() {
  return (
    <div className="root">
      <div>
        <h2>Redux Section:</h2>
        <div className="container">
          <CartRedux />
          <PostRedux />
        </div>
      </div>
      <div>
        <h2>Zustand Section:</h2>
        <div className="container">
          <CartZustand />
          <PostZustand />
        </div>
      </div>
    </div>
  );
}

export default App;
