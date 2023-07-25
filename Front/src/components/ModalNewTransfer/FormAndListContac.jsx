import { HiOutlineSearch } from "react-icons/hi";
import { filterContacsByName } from "./inputFilter";

const FormAndListContac = ({ setListOfContactsFiltered, contacts }) => {
  return (
    <form
      onSubmit={(e) =>
        filterContacsByName(e, setListOfContactsFiltered, contacts)
      }
      className="flex items-center justify-center gap-4"
    >
      <input
        type="text"
        id="filterContact"
        placeholder="Buscar en la agenda"
        className="my-2 w-full text-sm bg-grey-light text-gray rounded h-10 p-3 focus:outline-none"
      />
      <button className="text-3xl">
        <HiOutlineSearch />
      </button>
    </form>
  );
};
export default FormAndListContac;
