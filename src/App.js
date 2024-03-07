import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {Provider} from "react-redux"
import { store } from "./system/store";
function App() {
  return (
    <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  );
}

export default App;
