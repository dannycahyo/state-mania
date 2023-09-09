import { CartRedux } from "@containers/CartRedux";
import { PostRedux } from "@containers/PostRedux";

import "@styles/app.css";

function App() {
  return (
    <>
      <h2>Redux Section:</h2>
      <div className="container">
        <CartRedux />
        <PostRedux />
      </div>
    </>
  );
}

export default App;
