export default function Part(props) {
  const { part, exercise } = props;
  return (
    <div>
      <p>
        {part} - {exercise}
      </p>
    </div>
  );
}
