function App() {
  const numberOfIterations = 4
  return (
    <div>
      {Array.from({ length: numberOfIterations }, (_, index) => (
        <div key={index}>Item {index + 1}</div>
      ))}
    </div>
  );
}

export default App;
