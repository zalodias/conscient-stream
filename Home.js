import ConscientStream from './api.js';
import Block from './components/Block.js';

const streams = ConscientStream.getStreams();

const Home = () => {
  return `
    <div>
      ${streams
        .map(function (stream) {
          return Block({ text: stream.text });
        })
        .join('')}
    </div>
`;
};

export default Home;
