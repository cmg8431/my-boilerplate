import type { NextPage } from "next";
import * as S from "./styled";

const HomePage: NextPage = ({ results }) => {
  const Test = () => {
    console.log(results);
  };
  return (
    <div>
      <button onClick={() => Test()}></button>
    </div>
  );
};

export async function getServerSideProps() {
  const results = "Test";
  return {
    props: {
      results,
    },
  };
}

export default HomePage;
