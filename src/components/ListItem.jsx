export default function ListItem(props) {
  const lists = props.lists;
  
  return (
    <div>
      {lists.length > 0 &&
        lists.map((val) => (
          <div className="product-card" key={val.id}>
            <div className="product-title">{val.title}</div>
            <div className="product-description">{val.body}</div>
          </div>
        ))}
    </div>
  );
}
