import BankProducts from "../../components/Products/BankProducts";
import Carousel from "../../components/Products/Carousel";

const Products = () => {
    return (
        <section className="bg-dark grid">
            <Carousel />
            <BankProducts />
        </section>
    );
};
export default Products;
