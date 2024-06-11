import icons from "../../../../../icons/icons.json";


const IconsPage = () => {
  console.log(icons);

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
