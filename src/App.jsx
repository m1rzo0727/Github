import React, { useState } from "react";
import Main from "./Companents/Main";
import Mode from "./Companents/Mode";
import Search from "./Companents/Search";

const App = () => {
  const [data, setData] = useState([]);
  console.log(data.length);
  return (
    <div>
      <Mode></Mode>
      <Search setData={setData}></Search>

      <Main data={data}></Main>

      {/* {!data.message ? <Main data={data}></Main> : */}
    </div>
  );
};

export default App;
