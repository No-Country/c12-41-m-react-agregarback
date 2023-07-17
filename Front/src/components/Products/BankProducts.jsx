const BankProducts = () => {
  const products = [
    {
      title: 'Préstamos',
      description: 'Obtén préstamos rápidos y flexibles para tus necesidades.',
      image: 'url de la imagen del préstamo',
    },
    {
      title: 'Transferencias',
      description: 'Realiza transferencias de dinero de forma segura y rápida.',
      image: 'url de la imagen de transferencias',
    },
    {
      title: 'Pago de Servicios',
      description: 'Paga tus servicios fácilmente desde la comodidad de tu hogar.',
      image: 'url de la imagen de pago de servicios',
    },
    {
      title: 'Inversiones',
      description: 'Haz crecer tu dinero invirtiendo en nuestras opciones de inversión.',
      image: 'https://asset.cloudinary.com/danjwp1pg/5307ab771aee145cdb42cead2cde353e',
    },
    {
      title: 'Seguros',
      description: 'Protege lo que más importa con nuestros diversos planes de seguro.',
      image: 'url de la imagen de seguros',
    },
    {
      title: 'Tarjetas de Crédito',
      description: 'Obtén tarjetas de crédito con recompensas y beneficios exclusivos.',
      image: 'https://img.freepik.com/foto-gratis/retrato-nina-tarjeta-credito-cara_171337-3285.jpg?w=1380&t=st=1689456389~exp=1689456989~hmac=c753237928d689f4cb3f2c3c12235101772802b766f13453625b2c78ee748521',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-8 mx-auto max-w-5xl">
      {products.map((product, index) => (
        <div key={index} className="p-4 bg-dark shadow-lg rounded-lg">
          <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto mb-4 rounded-full" />
          <h2 className="text-xl text-dark font-semibold mb-2 bg-orange rounded-lg">{product.title}</h2>
          <p className="text-gray-600 p-4">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BankProducts;