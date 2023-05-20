const Block = ({ text }) => {
  return `
    <div contenteditable>
      ${text}
    </div>
`;
};

export default Block;
