import icons from "../../../../../icons/icons.json";
// import { Icon1inchFull } from "@bgd-labs/react-icons";


const IconsPage = () => {
  return (
    <div>
      {icons.map((item) => (
        <div key={item.symbol}>
          {item.symbol}
        </div>
      ))}
    </div>
  );
};

export default IconsPage;
