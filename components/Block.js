const Block = ({ text }) => {
  return `
    <div
      class="block"
      contenteditable="true"
    >
      ${text}
    </div>
`;
};

export default Block;
