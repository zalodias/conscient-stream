import { getStreams } from "./api/api.js";
import Block from "./components/Block.js";

const streams = await getStreams();

const Home = () => {
  return `
    <div class="grid gap-5">
      ${streams
        .map((stream) => {
          return Block({ text: stream.text });
        })
        .join("")}
    </div>
`;
};

export default Home;
