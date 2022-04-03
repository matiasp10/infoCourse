export default function Header(props) {
  const { title, id } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
