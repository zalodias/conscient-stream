fetch("http://localhost:8000/api/data", {
  method: "POST",
  body: JSON.stringify({ created_at: Date.now(), text: "conscient stream" }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
