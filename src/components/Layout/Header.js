import mealsImage from "../../assets/meals.jpg";

export const Header = (props) => {
  return (
    <>
      <header>
        <h1>My meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
