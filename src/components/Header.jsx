import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import SearchIcon from "../assets/images/search.svg";

const Header = () => {
  return (
    <section className="bg-primary py-5">
      <div className="max-w-[1400px] mx-auto px-5 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-x-4">
          <Logo />
          <h3 className="text-white text-2xl font-bold">Pokédex</h3>
        </div>
        <div className="pt-3 flex items-center gap-x-4 lg:pt-0">
          <Input
            className="placeholder:font-semibold  w-[252px] relative rounded-2xl py-2 pl-9"
            placeholder="Search"
            iconInput={SearchIcon}
            classNameInput="absolute top-[13px] flex itemps-center pl-3 left-0 w-7"
          />
          <Button
            className="bg-white rounded-full w-10 h-10 text-primary underline underline-offset-4"
            label={"A"}
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
