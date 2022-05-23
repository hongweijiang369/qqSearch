import React, { useState } from "react";
import Search from "./compoments/Search";
import Result from "./compoments/Result";
import axios from "axios";
import "./App.css";
interface IObject {
  name: string;
  qlogo: string;
  qq: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [qqInfo, getInfo] = useState<IObject>({
    name: "",
    qlogo: "",
    qq: "",
  });
  /***查询qq号码 */
  const handleSearch = async (qqNum: String) => {
    setLoading(true);
    const { data } = await axios.get("https://api.uomg.com/api/qq.info", { params: { qq: qqNum } });
    if (data.code === 1) {
      setLoading(false);
      getInfo({ ...data });
    } else {
      alert(data.msg || "请求错误，请重试");
    }
  };
  return (
    <div className="App">
      <Search handleSearch={handleSearch}></Search>
      {loading ? "加载中..." : <Result {...qqInfo}></Result>}
    </div>
  );
}

export default App;
