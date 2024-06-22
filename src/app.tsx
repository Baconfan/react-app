import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Dresden", "Berlin", "Hamburg", "Düsseldorf", "Köln"];

  return (
    <div>
      <ListGroup items={items} heading="Städte" />
    </div>
  );
}

export default App;
