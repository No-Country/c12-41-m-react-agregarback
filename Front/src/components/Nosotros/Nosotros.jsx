import React from 'react';
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { MdPayments } from 'react-icons/md';

const Card = ({ title, description, icon }) => {
    return (
        <div className="relative bg-dark py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transition duration-300 transform hover:scale-105">
            <div className="mt-8">
                <span className="flex items-center justify-center">
                    {icon}
                </span>
                <h2 className="mb-8 text-3xl font-bold">
                    <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
                        {title}
                    </span>{' '}
                </h2>
                <p className="text-xl font-semibold my-2 text-white">{description}</p>
            </div>
        </div>
    );
};

const Nosotros = () => {
    return (
        <div className="bg-dark">
            <div>
                <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-dark">
                    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                        <svg
                            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none slice"
                        >
                            <path d="M50 0H100L50 100H0L50 0Z" />
                        </svg>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                            src="https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </div>
                    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                ¿Quiénes Somos?<br />
                                <br />
                                <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
                                    AccessBank:<br />El futuro de
                                    la banca digital
                                </span>{' '}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-10">
                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                            <div className="flex lg:py-12">
                                <img
                                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="mb-8 text-3xl font-bold">  <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
                                        ¿Qué es AccessBank?
                                    </span>{' '}</h2>
                                    <p className="text-xl font-semibold my-2 text-white">
                                        AccessBank es un banco totalmente digital que ofrece servicios financieros innovadores y fáciles de usar
                                        desde cualquier dispositivo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                        <Card
                            title="Banca Móvil"
                            description="Accede a tus cuentas, haz transferencias, paga tus facturas y mucho más desde la app de AccessBank."
                            icon={<FaMoneyBillTransfer size={50} color='orange' />}
                        />
                        <Card
                            title="Billetera Digital"
                            description="Deja la billetera en casa: ahora puedes pagar con tu celular en todos los lugares que aceptan contactless."
                            icon={<FaMoneyBillTrendUp size={50} color='yellow' />}
                        />
                        <Card
                            title="Tarjeta de Crédito"
                            description="Recibe tu tarjeta virtual de AccessBank en minutos y disfruta de los mejores beneficios en tus compras en línea."
                            icon={<MdPayments size={50} color='orange' />}
                        />
                        <Card
                            title="Banca en Línea"
                            description="Gestiona tus finanzas personales en línea con nuestra plataforma amigable e intuitiva."
                            icon={<MdPayments size={50} color='yellow' />}
                        />
                    </div>
                </div>
                <div className="relative flex justify-center w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-center">
                            <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
                                Seguridad y privacidad
                            </span>
                        </h2>
                        <div className="text-center">
                            <div className="bg-dark p-6 rounded-lg hover:bg-gray-200 transition duration-300">
                                <ul className="text-xl font-semibold my-2 text-white">
                                    <li>
                                        En AccessBank, protegemos tu privacidad y seguridad con los más altos estándares de la industria financiera:
                                    </li>
                                    <li>
                                        Usamos los últimos modelos de cifrado y autenticación para proteger tus datos personales y financieros.
                                    </li>
                                    <li>
                                        Nunca compartimos tu información con terceros, excepto en casos de fuerza mayor o requerimientos legales.
                                    </li>
                                    <li>
                                        Monitoreamos activamente todas las actividades de tu cuenta para detectar y prevenir fraudes y usos no autorizados.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Nosotros;
