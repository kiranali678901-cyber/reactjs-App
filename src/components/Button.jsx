import { products } from "../Data/Data";

function Button() {
  return( <>
  <button className="btn">My Button</button>
  <button className="btn">Other Button</button></>
  )
}

export default Button;

export function DispalyPro() {

const listItm = products.map((product,index) => <li key = {index}>{product.title}{index}{product.id}</li>)
  return (
    <>
      <ul>
    {listItm}
      </ul>
    </>
  );
}
