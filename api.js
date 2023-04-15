const getStreams = () => {
  const streams = JSON.parse(localStorage.getItem('streams') || '[]');

  return streams.sort((a, b) => {
    return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
  });
};

const saveStream = (stream) => {
  const streams = getStreams();

  stream.id = crypto.randomUUID();
  stream.created_time = new Date().toISOString();

  const updatedStreams = [...streams, stream];

  localStorage.setItem('streams', JSON.stringify(updatedStreams));
};

const deleteStream = (id) => {
  const streams = getStreams();

  const updatedStreams = streams.filter((stream) => stream.id !== id);

  localStorage.setItem('streams', JSON.stringify(updatedStreams));
};

export default { getStreams, saveStream, deleteStream };
