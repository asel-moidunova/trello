import Allproject from "./routes/Allproject";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Allproject />
        <div id="modal-root"></div>
      </BrowserRouter>
    </div>
  );
};

export default App;
