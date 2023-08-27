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

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res: any) => res.json())
      .then((result: any) => setData(result.users));
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
