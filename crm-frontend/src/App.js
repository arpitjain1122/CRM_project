import logo from "./logo.svg";
import "./App.css";

import { Button } from "react-bootstrap";
import { Entry } from "./pages/entry/Entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div>
      {/* <Entry/>      */}
      <DefaultLayout>
        {/*passing props */}
        send page content
      </DefaultLayout>
    </div>
  );
}

export default App;
