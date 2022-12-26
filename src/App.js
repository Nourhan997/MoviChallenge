import AppRouter from "./src/core/routes/AppRouter";
import store from "./src/core/redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      {" "}
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </>
  );
}

export default App;
