import type { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicTestComponent = dynamic<{}>(
  () =>
    import("../components/ReactSpeechRecognitionSample").then(
      (mod) => mod.Test2
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
