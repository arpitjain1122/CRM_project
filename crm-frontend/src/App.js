import logo from "./logo.svg";
import "./App.css";

import { Button } from "react-bootstrap";
//import { Entry } from "./pages/entry/Entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
//import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new ticket/AddTicket.page";

function App() {
  return (
    <div>
      {/* <Entry/>      */}
      <DefaultLayout>
        {/*passing props */}
        {/* <Dashboard></Dashboard> */}
        <AddTicket></AddTicket>
      </DefaultLayout>
    </div>
  );
}

export default App;
