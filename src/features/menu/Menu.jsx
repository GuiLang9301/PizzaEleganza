import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-[100px] mx-[100px] my-[50px] overflow-clip">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
}

export default Menu;

export async function loader() {
  const menu = await getMenu();
  return menu;
}
