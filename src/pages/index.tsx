import type { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicTestComponent = dynamic<{}>(
  () =>
    import("../components/ReactSpeechRecognitionExample").then(
      (mod) => mod.ReactSpeechRecognitionExample
    ),
  { ssr: false }
);
const Home: NextPage = () => {
  return (
    <div>
      <DynamicTestComponent />
    </div>
  );
};

export default Home;
