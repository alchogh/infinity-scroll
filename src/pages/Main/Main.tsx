import { useEffect, useState } from "react";
import Feed from "../Feed/Feed";
import * as S from "./Main.style";

interface props {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
}

function Main() {
  const [data, setData] = useState<props[]>([]);

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/users/", {
      method: "GET",
    });
    const result = await response.json();
    setData(result.users);
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <S.Header>
      {data.map((list: props) => {
        return <Feed key={list.id} {...list} />;
      })}
    </S.Header>
  );
}

export default Main;
