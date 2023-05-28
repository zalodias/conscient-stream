import { getStreams } from "./api.js";
import Block from "./components/Block.js";

const streams = await getStreams();

const Home = () => {
  return `
    <div>
      ${streams
        .map((stream) => {
          return Block({ text: stream.text });
        })
        .join("")}
    </div>
`;
};

export default Home;
