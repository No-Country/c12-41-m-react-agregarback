import { AiOutlineAreaChart } from "react-icons/ai";
import { BsFillHouseLockFill } from "react-icons/bs";
import { FaCcVisa, FaMoneyCheckAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import { PiPercentFill } from "react-icons/pi";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import Card from "./CardProducts";

const BankProducts = () => {
  return (
    <div className="bg-dark container my-24 mx-auto md:px-6">
      <section className="mb-10">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src="https://res.cloudinary.com/danjwp1pg/image/upload/v1690135141/Carousel/servicios_ab2.jpg"
                className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                alt="image"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-8 text-3xl font-bold">
                  {" "}
                  <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
                    Servicios ofrecidos{" "}
                  </span>{" "}
                </h2>
                <p className="text-xl font-semibold my-2 text-white">
                  AccessBank ofrece servicios financieros completos para cubrir
                  todas tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <div className="grid w-full gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          <Card
            title="Cajas de Ahorro"
            description="Maneja tus finanzas con total
                libertad e independencia
                gracias a nuestras cajas de
                ahorro con gran cantidad
                de beneficios y sin cargos
                ocultos."
            icon={<MdAccountBalance color="orange" />}
          />
          <Card
            title="Préstamos Personales"
            description="Encuentra el financiamiento
                que necesitas con nuestras
                tasas de interés competitivas
                y procesos de aprobación
                rápidos y sencillos."
            icon={<GiReceiveMoney size={50} color="yellow" />}
          />
          <Card
            title="Tarjetas de Débito"
            description="Administra tus finanzas con
            nuestra tarjeta de débito Visa,
            que te permite hacer compras
            en línea, transferir dinero y
            gestionar tu saldo fácilmente."
            icon={<FaCcVisa size={50} color="orange" />}
          />
          <Card
            title="Inversiones"
            description="Los fondos comunes de inversión son una excelente alternativa para los inversores con poco conocimiento
                financiero. Esta opción permite acceder a un portafolio diversificado de activos."
            icon={<AiOutlineAreaChart size={50} color="yellow" />}
          />
          <Card
            title="Seguros"
            description="AccessBank ofrece una amplia gama de servicios de seguros para proteger a sus
            clientes y brindarles tranquilidad en todas las etapas de su vida financiera."
            icon={<BsFillHouseLockFill size={50} color="orange" />}
          />
          <Card
            title="Plazos Fijos"
            description="El plazo fijo es una inversión segura y de bajo riesgo, ya que los ahorros del inversor están protegidos por la
            entidad financiera."
            icon={<PiPercentFill size={50} color="yellow" />}
          />
          <Card
            title="Divisas"
            description="Conoce en tiempo real la cotización de diferentes monedas y realiza tus operaciones a la mejor tasa de cambio."
            icon={<RiMoneyEuroCircleFill size={50} color="orange" />}
          />
          <Card
            title="Depósitos"
            description="Recibe depósitos de dinero en efectivo o cheques electrónicos. Gozan de una disponibilidad inmediata."
            icon={<FaMoneyCheckAlt size={50} color="orange" />}
          />
        </div>
      </div>
      <div className="relative flex justify-center w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-center">
            <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
              ¿Por qué elegir AccessBank?
            </span>
          </h2>
          <div className="text-justify">
            <div className="bg-gray p-6 rounded-lg hover:bg-gray-200 transition duration-300">
              <article className="text-xl font-semibold my-2 text-white">
                Nuestra plataforma bancaria se ha diseñado para ofrecerte una
                experiencia simplificada y cómoda con una interfaz intuitiva y
                atractiva. AccessBank cuenta con la solidez financiera para
                ofrecerte las mejores opciones para tu futuro financiero.
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankProducts;
