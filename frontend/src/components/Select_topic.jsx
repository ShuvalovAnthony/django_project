import { createSignal, createResource, For } from 'solid-js';

function Select_topic() {
  const [id, setId] = createSignal(10);
  const [topic] = createResource(id, async (id) => {
    return fetch(`http://127.0.0.1:8000/api/v1/topic/${id}`).then(res => res.json())
  })

  function handleSelect(event){
    setId(event.target.value);
  }

  return (
    <>
    <div>
      <h1>APP 2</h1>
      <select onChange={handleSelect}>
        <option value={7}>
          Option number 7
        </option>
        <option value={8}>
        Option number 8
        </option>
        <option value={9}>
        Option number 9
        </option>
      </select>
      
      {topic() && (
      <section>
        <h1>{topic().title}</h1>
      </section>
      )}
    </div>
    </>
    
  );
}


export default Select_topic; 
