import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {Provider} from "react-redux"
import { store } from "./system/store";
function App() {
  return (
    <div className="dark">

    <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  </div>

  );
}

export default App;
