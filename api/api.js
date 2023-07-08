export async function getStreams() {
  try {
    const response = await fetch("http://localhost:8000/api/streams");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
