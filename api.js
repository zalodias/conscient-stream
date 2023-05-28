export async function getStreams() {
  try {
    const response = await fetch("http://localhost:8000/api/streams");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
