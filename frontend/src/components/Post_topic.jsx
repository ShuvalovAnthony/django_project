import { createSignal, createResource, For } from 'solid-js';

function Post_topic() {
  const [id, setId] = createSignal(10);
  const [topic] = createResource(id, async (id) => {
    return fetch(`http://127.0.0.1:8000/api/v1/topic/${id}`).then(res => res.json())
  })

  function handleSelect(event) {
    setId(event.target.value);
  }

  return (
    <>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col">
            </div>
          </div>
        </div>
      </div>
    </>

  );
}


export default Post_topic; 
