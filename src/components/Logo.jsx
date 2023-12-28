import LogoPokemon from "../assets/images/pokeball.svg";

const Logo = ({ className }) => {
  return (
    <img src={LogoPokemon} alt="img logo pokemon" className={`${className}`} />
  );
};

export default Logo;
