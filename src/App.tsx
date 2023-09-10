import { CartRedux } from "@containers/CartRedux";
import { CartZustand } from "@containers/CartZustand";
import { PostRedux } from "@containers/PostRedux";
import { PostZustand } from "@containers/PostZustand";
import { CartJotai } from "@containers/CartJotai";
import { PostJotai } from "@containers/PostJotai";
import { CartRecoil } from "@containers/CartRecoil";
import { PostRecoil } from "@containers/PostRecoil";

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
      <div>
        <h2>Jotai Section:</h2>
        <div className="container">
          <CartJotai />
          <PostJotai />
        </div>
      </div>
      <div>
        <h2>Recoil Section:</h2>
        <div className="container">
          <CartRecoil />
          <PostRecoil />
        </div>
      </div>
    </div>
  );
}

export default App;
