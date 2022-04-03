import Part from './Part';

export default function Content(props) {
  const { parts } = props;
  return (
    <div>
      {parts.map((e) => {
        return <Part part={e.name} exercise={e.exercises} key={e.id} />;
      })}
    </div>
  );
}
