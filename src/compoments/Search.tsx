import React, { useState, useEffect } from "react";
import { useDebounce } from "../utils/hooks";
import "./public.css";

interface IProps {
  handleSearch: (qqNum: String) => void;
}

function Search(props: IProps) {
  const { handleSearch } = props;
  const [qqNum, setNum] = useState<String>("");
  /***防抖处理 */
  const debounceParam = useDebounce(qqNum, 500);

  useEffect(() => {
    const reg = /[0-9]\w{0,10}$/;
    if (qqNum.length > 0) {
      if (!reg.test(String(qqNum))) {
        alert("输入格式为位数字");
        return;
      }
      if (qqNum.length >= 5) {
        // findQQInfo();
        handleSearch(qqNum);
      }
    }
  }, [debounceParam]);

  return (
    <div>
      <h1>QQ号查询</h1>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="on">
        QQ
        <input
          type="text"
          name="username"
          value={String(qqNum)}
          onChange={(e) => setNum(e.target.value)}
          className="search-input"
        />
      </form>
    </div>
  );
}

export default Search;
