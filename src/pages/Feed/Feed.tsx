import * as S from "./Feed.style";

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

const Feed = (props: props) => {
  console.log(props);
  return (
    <S.Container>
      <img src={props.image} alt="pic" />
      <div>{props.lastName}</div>
    </S.Container>
  );
};

export default Feed;
