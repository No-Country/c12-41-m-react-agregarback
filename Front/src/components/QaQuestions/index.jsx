import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const QuestionAndAnswer = ({ question, answer }) => (
  <div>
    <p className="py-2">
      <strong className="text-orange">Pregunta:</strong>  {question}
    </p>
    <p className="pb-5">
      <strong className="text-yellow">Respuesta:</strong> {answer}
    </p>
  </div>
);

const FAQPage = () => {
  const faqItems = [
    {
      question: "Comienzas a Aceptar",
      content:(
        <>
          <QuestionAndAnswer
            question="¿Cómo me comunico con el Soporte de Operaciones al Cliente de Accesbank?"
            answer="Puedes comunicarte con el Soporte de Operaciones al Cliente de Accesbank enviando un correo electrónico a Customer_Support@accesbank.com"
          />
          <QuestionAndAnswer
            question="¿Cómo comienzo a aceptar Accesbank?"
            answer="Es fácil comenzar a hacerlo. El primer paso es comunicarte con un adquiriente o proveedor de servicios de pago para solicitar una cuenta de comerciante con un banco o uno de sus agentes. Comenzar a aceptar pagos."
          />
          <QuestionAndAnswer
            question="¿Cómo acepto los pagos de comercio electrónico?"
            answer="Muchos proveedores de servicios de pago pueden ayudarte a aceptar pagos de comercio electrónico. De hecho, muchos proveedores incluso pueden ayudarte a crear un sitio web, agregar la función de carrito de compra y mejorar la seguridad de tu sitio y tus transacciones."
          />
          <QuestionAndAnswer
            question="¿Cómo puedo descargar la marca comercial Accesbank para utilizarla en mi sitio web?"
            answer="En el Centro de Marca Accesbank se encuentran disponibles para descarga las versiones electrónicas de la marca Accesbank."
          />
          <QuestionAndAnswer
            question="Mi pregunta no aparece en la lista."
            answer="Si tu pregunta no aparece en la lista, es mejor que te comuniques con la institución financiera que emitió tu cuenta, ya que solamente ellos poseen la información específica de tu cuenta. Por lo general, el número de atención al cliente de tu entidad financiera aparece al dorso de tu tarjeta. Si crees que solo Accesbank puede responder a tu pregunta, envía un correo electrónico a AskAccesbank@accesbank.com o envía una carta por correo postal a: Consumer Inquiries, Accesbank International Incorporated, 2000 Purchase Street, Purchase, NY 10577."
          />
          <QuestionAndAnswer
            question="¿Cómo puedo solicitar una tarjeta Accesbank?"
            answer="Si ya tienes una cuenta de depósito en un banco o institución financiera, deberás primero comunicarte con ellos para saber si te pueden ofrecer una tarjeta Accesbank. Si actualmente no tienes relación con ninguna institución financiera o deseas recibir ofertas de diversos emisores, Accesbank ha creado una herramienta en línea que te ayuda a tomar decisiones sobre las tarjetas que están disponibles."
          />
          <QuestionAndAnswer
            question="¿Existe algún programa que me ayude a hacer crecer mi negocio?"
            answer="Sí, Accesbank tiene programas diseñados para hacer crecer diversos tipos de negocios."
          />
          <QuestionAndAnswer
            question="¿Cuáles son los beneficios de aceptar Accesbank?"
            answer="Si tienes un negocio nuevo o uno ya establecido, la aceptación de tarjetas puede tener un impacto positivo en tu balance final. Estos son tan solo algunos de los muchos beneficios: Mayores ventas, mayor satisfacción del cliente, cajas más rápidas, mejor eficiencia, seguridad y conversión de divisas."
          />
          <QuestionAndAnswer
            question="¿Cómo comienzo a aceptar pagos digitales/con tarjeta?"
            answer="Encuentra lo que necesitarás para comenzar a aceptar pagos electrónicos."
          />
          <QuestionAndAnswer
            question="¿Cuál es la diferencia entre un adquiriente y un facilitador de pagos?"
            answer="Un facilitador de pagos es un comerciante oficial que facilita transacciones en nombre de un sub comerciante. Un adquiriente es el banco o la institución financiera que procesa pagos con crédito o débito para un comerciante."
          />
          <QuestionAndAnswer
            question="¿Qué es un adquiriente y por qué necesito uno?"
            answer="También llamado banco comerciante, un adquiriente es una institución financiera que tiene la licencia de Accesbank para asistir a los comerciantes a aceptar pagos con tarjetas Accesbank. Los adquirientes les venden sus servicios de procesamiento directamente a los comerciantes o contratan agentes para vender en su nombre. Estos agentes deben estar registrados en Accesbank e identificar claramente al banco emisor de Accesbank que representan en sus tarjetas de presentación y artículos de papelería. El acuerdo comercial también debe identificar claramente el nombre del banco."
          />
          <QuestionAndAnswer
            question="¿Qué es una tasa de intercambio?"
            answer="Las tasas de intercambio son cargos que los adquirientes les pagan a los emisores de la tarjeta en las transacciones de compra realizadas con tarjetas de pago. Son solo uno de los muchos componentes de costos incluidos en la Tasa de Descuento Comercial. Accesbank establece sus tasas de intercambio, que son un método eficaz y necesario mediante el cual Accesbank mantiene una red viva de pagos. Más información acerca de las tasas de intercambio de Accesbank."
          />
          <QuestionAndAnswer
            question="¿Con quién me comunico si tengo un problema con mis terminales del punto de venta?"
            answer="Comunícate con el adquiriente o el facilitador de pagos si tienes consultas relacionadas con tus terminales."
          />
          <QuestionAndAnswer
            question="¿Incurriré en algún costo si acepto los pagos?"
            answer="Tu adquiriente/facilitador de pagos te brindará información de costos."
          />
        </>
      ),
    },
    {
      question: "Solicita una Tarjeta AccesBank",
      content:(   <>
        <QuestionAndAnswer
          question="¿Cómo solicito una tarjeta Accesbank?"
          answer="Accesbank ha diseñado una herramienta en línea para ayudarte a tomar decisiones sobre las tarjetas que tienes disponibles."
        />
        <QuestionAndAnswer
          question="¿Preguntas que aquí no se incluyen?"
          answer="Si tu pregunta no aparece en la lista, te recomendamos que te comuniques con Accesbank, ya que solamente ellos poseen la información específica de tu cuenta. Por lo general, el número de atención al cliente de Accesbank aparece al dorso de la tarjeta."
        />
        </>
      ),},
    {
      question: "Pagar las facturas",
      content:(
        <>
          <QuestionAndAnswer
            question="¿Puedo pagar las facturas de servicios que aceptan Accesbank directamente desde este sitio?"
            answer="No. Para pagar una factura, visita el sitio web del proveedor de servicio para conocer las instrucciones de cómo pagarles."
          />
          <QuestionAndAnswer
            question="¿Tengo que pagar un recargo por pagar facturas con Accesbank?"
            answer="Accesbank no te cobra recargos por pagar facturas. Aunque la mayoría de los proveedores de servicios no cobran recargos, asegúrate de consultar si lo hacen o si tienen restricciones asociadas con el hecho de realizar el pago con tu Accesbank."
          />
          <QuestionAndAnswer
            question="¿Cómo pago una factura con una tarjeta Accesbank?"
            answer="Comunícate con tu proveedor de servicios para hacer el pago electrónico. Muchos brindan esta opción de pago a través de sus sitios web o por teléfono."
          />
          <QuestionAndAnswer
            question="¿Con qué frecuencia puedo hacer pagos automáticos de facturas, y cuándo se pagan las facturas?"
            answer="El pago automático de facturas es un arreglo que haces con tu compañía de facturación o proveedor(es) de servicio(s) seleccionado(s), por lo que deberás comunicarte directamente con ellos para convenir los montos y la programación del pago. Cada proveedor tiene sus propios procedimientos para el pago automático de facturas."
          />
          <QuestionAndAnswer
            question="¿Hay algún límite de pagos automáticos de facturas que puedo hacer con mi Accesbank?"
            answer="No, pero puedes estar limitado a cargos generales a tu cuenta Accesbank, si hacerlo ocasiona que excedas tu límite de crédito."
          />
          <QuestionAndAnswer
            question="¿Quién emitió mi tarjeta?"
            answer="Encontrarás la información de contacto del emisor de tu tarjeta al dorso de tu Accesbank y en tu corte de cuenta."
          />
          <QuestionAndAnswer
            question="¿Qué tarjetas puedo utilizar para pagar facturas?"
            answer="Puedes usar tarjetas de crédito o débito que tengan el logo de Accesbank. Te recomendamos que confirmes con cada proveedor de servicio para asegurarte de que aceptan tu tarjeta como forma de pago."
          />
          <QuestionAndAnswer
            question="¿Qué es el pago automático de facturas?"
            answer="El pago automático de facturas le permite evitar cobros y recargos por mora al autorizar a sus proveedores de servicios seleccionados a cobrar automáticamente de su cuenta de Accesbank de forma regular."
          />
          <QuestionAndAnswer
            question="¿Qué es el pago manual de facturas?"
            answer="Con el pago manual de facturas, tienes la libertad de seleccionar el monto a pagar y la fecha en que deseas hacer el pago. Cada vez que tengas que pagar una factura, inicias el proceso de pago."
          />
          <QuestionAndAnswer
            question="Si me suscribo al pago automático de factura, ¿seguiré recibiendo la factura?"
            answer="El pago automático de facturas es un arreglo entre su(s) proveedor(es) de servicio(s) seleccionado(s), por lo que deberás comunicarte directamente (por teléfono o en línea) con ellos para convenir los montos y la programación del pago. La mayoría de las compañías de facturación siguen enviando por correo electrónico la factura indicando el monto total que te cobrarán. Sin embargo, algunos proveedores te dan la opción de recibir la factura en línea o no. En el momento que inicias una relación de pago automático de factura, debes determinar la forma en que el proveedor te enviará la factura."
          />
          <QuestionAndAnswer
            question="¿Qué información me solicitará el proveedor de servicios/compañía de facturación?"
            answer="El pago de facturas es un arreglo entre ti y su(s) proveedor(es) de servicio(s) seleccionado(s), por lo que deberás comunicarte directamente con ellos para convenir los montos y la programación del pago. Por lo general, el proveedor te solicitará tu número de cuenta Accesbank y la fecha de vencimiento. Para el pago automático de facturas, es posible que el proveedor también te solicite que autorices el monto de pago para que se cargue automáticamente y la fecha específica en la que deseas pagar cada mes. Nota: No todos los proveedores de servicios/compañías de facturación te permitirán elegir la fecha de facturación. Y, algunos proveedores de servicios pueden pedirte información adicional, como tu firma."
          />
          <QuestionAndAnswer
            question="¿Qué sucede si la información de mi cuenta Accesbank cambia?"
            answer="La información de tu cuenta Accesbank puede cambiar debido al extravío o robo de tu tarjeta, cambio de la fecha de vencimiento o actualización a un nuevo producto. Para evitar la interrupción del servicio, debes comunicarte con cada proveedor e indicarles la nueva información de tu cuenta. Te recomendamos tener una lista de los servicios que pagas automáticamente para que, cuando sea necesario, puedas actualizar eficientemente la información."
          />
          <QuestionAndAnswer
            question="¿Qué sucede si deseo interrumpir un pago automático de factura?"
            answer="Comunícate con el proveedor con quien estableciste el pago automático de facturas y sigue sus procedimientos para cancelar o modificar el método de pago."
          />
          <QuestionAndAnswer
            question="¿Qué sucede si no estoy de acuerdo con el monto de pago efectuado a una compañía de facturación/proveedor de servicios en mi corte de cuenta Accesbank?"
            answer="Te recomendamos que revises la factura en formato físico o electrónico que le envías el proveedor antes de que se efectúe el pago con tu Accesbank. Sin embargo, si hay algún error o tienes alguna pregunta acerca del pago facturado a tu tarjeta, comunícate con el proveedor del servicio de inmediato para resolver las discrepancias en el pago. Como tarjetahabiente de Accesbank, no eres responsable de transacciones no autorizadas cargadas a tu cuenta. Más información acerca de nuestra cobertura de Responsabilidad Cero. Aplican excepciones."
          />
          <QuestionAndAnswer
            question="¿Cuáles son los beneficios del pago de facturas utilizando tarjetas Accesbank?"
            answer="Usar tu Accesbank es mucho más rápido y práctico que hacer cheques. Puedes iniciar pagos en cualquier momento y desde cualquier parte del mundo. Los cargos aparecerán reflejados en tu corte mensual, por lo que organizarse y hacer el seguimiento de tus gastos es fácil y efectivo. Además, si usas el pago automático de factura no tendrás que preocuparte por pagos olvidados o recargos por mora. De acuerdo a la tarjeta que uses, también podrás recibir recompensas."
          />
        </>
      ),
    },
    {
      question: "Se comprometió mi tarjeta",
      content:(   <>
        <QuestionAndAnswer
          question="¿Cómo puedo obtener el nombre del comerciante en cuyo establecimiento se comprometió la cuenta de mi tarjeta Accesbank?"
          answer="Específicamente respecto a las violaciones de datos de las tarjetas, Accesbank no puede determinar qué transacción del comerciante generó la violación de los datos de una tarjeta, ya que, por lo general, estos datos no se nos proporcionan. Te instamos a que nos comuniques esos datos. Te recomendamos que te comuniques con la institución financiera que emitió tu tarjeta Accesbank para obtener la información más actualizada al respecto. Por lo general, el número de asistencia al cliente al que puedes llamar figura en el al dorso de tu tarjeta. "
        />
        </>
      ),},
    {
      question: "Beneficios de la Tarjeta",
      content:(
        <>
          <QuestionAndAnswer
            question="¿Qué seguros y beneficios de tarjeta tengo sin costo adicional con mi Accesbank?"
            answer="Accesbank te ofrece distintos tipos de cobertura y beneficios que varían dependiendo de tu tarjeta."
          />
          <QuestionAndAnswer
            question="¿Qué sucede si extravío un artículo que compré con una Accesbank?"
            answer="Si perdiste un producto cuyo precio total pagaste con tu tarjeta Accesbank, probablemente puedas pedir la reposición de ese producto o un reembolso. Accesbank te ofrece distintos tipos de cobertura y beneficios que varían dependiendo de tu tarjeta."
          />
          <QuestionAndAnswer
            question="¿Qué seguro de vehículos ofrece Accesbank cuando alquilo un vehículo con mi Accesbank?"
            answer="El seguro de vehículos alquilados varía según la ubicación y depende de la tarjeta que uses."
          />
          <QuestionAndAnswer
            question="¿Cómo puedo obtener más información sobre los beneficios de mi tarjeta?"
            answer="Accesbank te ofrece distintos tipos de cobertura y beneficios que varían dependiendo de tu tarjeta."
          />
          <QuestionAndAnswer
            question="¿Cómo hago un reclamo respecto a los beneficios de mi tarjeta?"
            answer="Llama sin costo alguno al Centro de Asistencia de Accesbank para realizar tu reclamo y obtener información adicional sobre los beneficios de tu tarjeta."
          />
          <QuestionAndAnswer
            question="Mi pregunta no aparece en la lista."
            answer="Si tu pregunta no aparece en la lista, te recomendamos que te comuniques con la institución financiera que emitió tu cuenta, ya que solamente ellos poseen la información específica de tu cuenta. Por lo general, el número de atención al cliente de tu institución financiera aparece al dorso de tu tarjeta."
          />
        </>
      ),
    },,
    {
      question: "Tarjetas con Chip/EMV",
      content:(
        <>
          <QuestionAndAnswer
            question="¿Qué es una tarjeta con chip EMV y cómo esa tecnología me puede ayudar con mi negocio?"
            answer="La tarjeta con chip EMV es una tarjeta con un chip de computadora incorporado. Son simples de usar y aceptar, y le brindan al tarjetahabiente mayor practicidad y seguridad. Estas tarjetas pueden incluso llevar un registro de compras, lo que les brinda a los minoristas y proveedores de servicios oportunidades de marketing."
          />
          <QuestionAndAnswer
            question="¿Las tarjetas con chip son nuevas?"
            answer="Aunque las tarjetas con chip son relativamente nuevas en Estados Unidos, se han utilizado en otros países durante muchos años. En algunos países, especialmente en Europa, los comercios están más familiarizados con la aceptación de las tarjetas con chip."
          />
          <QuestionAndAnswer
            question="¿Cuál es la diferencia entre una tarjeta con chip y una tarjeta de banda magnética?"
            answer="Una tarjeta con chip se ve igual que una tradicional solo que tiene un chip incorporado. En lugar de deslizar tu tarjeta, introduces tu tarjeta con chip en la terminal para completar la transacción. Tu tarjeta también funciona sin contacto por lo que puedes acercar tu tarjeta a la caja cuando se te ofrece la opción."
          />
          <QuestionAndAnswer
            question="¿Qué son las tarjetas con chip?"
            answer="Una tarjeta con chip es como la tarjeta que tienes actualmente, pero incluye un microchip. El chip contiene información cifrada, lo que hace que sea extremadamente difícil copiar o falsificar la tarjeta. Tu tarjeta con chip también posee la banda magnética en el dorso, para que puedas seguir utilizando tu tarjeta mientras los comercios hacen la transición a los nuevos terminales que permiten el uso de las tarjetas con chip."
          />
          <QuestionAndAnswer
            question="¿Cuáles son los beneficios del chip?"
            answer="El microchip incorporado brinda características de seguridad sólidas y otras capacidades que no son posibles con las tarjetas de banda magnética tradicionales. Una tarjeta con chip es prácticamente imposible de falsificar."
          />
          <QuestionAndAnswer
            question="¿Dónde puedo utilizar mi tarjeta con chip?"
            answer="Utiliza tu tarjeta con chip en los mismos comercios en los que lo haces actualmente; ya sea introduciendo la tarjeta en las terminales que permiten el uso de las tarjetas con chip o simplemente deslizándola. También puede seguir utilizando tus tarjetas como lo hacías antes para pagos en línea, pagos por teléfono y en cajeros automáticos."
          />
          <QuestionAndAnswer
            question="¿A quién puedo contactar si necesito más información?"
            answer="Para obtener más información acerca de tu tarjeta con chip AccesBank, te recomendamos que te pongas en contacto con AccesBank o tu institución financiera emisora de la tarjeta."
          />
          <QuestionAndAnswer
            question="¿Por qué están actualizando mi tarjeta a una tarjeta con chip?"
            answer="Las tarjetas con chip se están introduciendo en muchos países debido a su éxito comprobado en mejorar la seguridad de las transacciones. La actualización a una tarjeta con chip brinda una capa adicional de protección tanto para los titulares de tarjetas como para los comerciantes al realizar transacciones."
          />
          <QuestionAndAnswer
            question="¿Qué es mi código PIN?"
            answer="El código PIN de tu tarjeta con chip AccesBank es el mismo código PIN de tu tarjeta anterior. Si olvidaste tu código PIN o deseas cambiarlo, comunícate con AccesBank o tu institución financiera emisora de la tarjeta."
          />
          <QuestionAndAnswer
            question="¿Cómo funciona el chip?"
            answer="Si introduces o acercas tu tarjeta con chip a la terminal, el chip se comunica con la terminal para determinar si la tarjeta es auténtica. Por lo general, la terminal te pedirá que ingreses tu código PIN para validar tu identidad. Una vez aprobada, se completará tu transacción."
          />
          <QuestionAndAnswer
            question="¿Cómo puedo saber si mi tarjeta con chip tiene la función de AccesBank sin contacto?"
            answer="Las tarjetas que tienen capacidades sin contacto tendrán la palabra 'sin contacto' y también pueden tener el símbolo sin contacto en la tarjeta. Puedes acercar la tarjeta a la terminal en los comercios que tienen el símbolo o dicen 'sin contacto' en la terminal. Si un comercio no tiene esta funcionalidad, será necesario que introduzcas tu tarjeta con chip en la terminal e introduzcas tu código PIN."
          />
          <QuestionAndAnswer
            question="¿Por qué mi tarjeta de crédito tiene un código PIN?"
            answer="Tu tarjeta de crédito tiene un código PIN para brindarte características de seguridad avanzadas. Al ingresar tu código PIN, se valida que eres el usuario autorizado de la tarjeta. No se te cobrarán cargos adicionales por usar tu código PIN, a menos que utilices la tarjeta de crédito para retirar efectivo en un cajero automático."
          />
        </>
      ),
    },

    {
      question: "Consultas por las autoridades",
      content:(   <>
        <QuestionAndAnswer
          question="Trabajo en una entidad para el cumplimiento de la ley y estoy investigando un caso de fraude, ¿con quién puedo hablar?"
          answer="Si estás llevando a cabo una investigación relacionada con un caso de fraude y necesitas hablar con Accesbank, te recomendamos que te comuniques con nuestro Centro de Cumplimiento de la Ley. Puedes enviar un correo electrónico a Law_Enforcement_Support@accesbank.com para obtener asistencia en tu investigación. Al contactarnos, asegúrate de proporcionar detalles relevantes sobre el caso y la naturaleza de tu investigación. Nuestro equipo de cumplimiento de la ley se comunicará contigo y brindará la ayuda necesaria en el marco de nuestras políticas y procedimientos. 
          "
        /> 
        
        </>),},
    {
      question: "Reposición de Tarjeta",
      content:(   <>
        <QuestionAndAnswer
          question="¿Cómo puedo obtener una tarjeta de reposición?"
          answer=" AccesBank puede asistirte para que obtengas la reposición de tu tarjeta trabajando en conjunto con la entidad financiera que emitió tu tarjeta. Para emitir la reposición de tu tarjeta es necesario que tu institución financiera emita un nuevo número de cuenta. Para solicitar una reposición de emergencia de su tarjeta, puedes ponerte en contacto con el Centro de Asistencia AccesBank  
 
          "
        /> 
        
        </>),},
     {
      question: "Robo o extravío de tarjeta",
      content: (
        <>
          <QuestionAndAnswer
            question="Ya no tengo mi tarjeta AccessBank, ¿cómo denuncio su robo o extravío?"
            answer="Un representante de AccessBank te asistirá para completar un informe de tarjeta extraviada o robada. Puedes ponerte en contacto con la institución financiera que emitió tu tarjeta AccessBank para denunciar el robo o extravío y solicitar la desactivación de la tarjeta."
          />
          <QuestionAndAnswer
            question="¿Qué responsabilidad tengo por las compras no autorizadas que se realicen con una tarjeta AccessBank robada o extraviada?"
            answer="Si la Protección de Responsabilidad Zerode AccessBank se aplica a tu tarjeta, una vez que informes a AccessBank sobre el robo o extravío de tu tarjeta, en la mayoría de los casos, no serás responsable de ningún cargo no autorizado. Sin embargo, es importante que revises tus estados de cuenta posteriores a la denuncia del robo o extravío para verificar que no se hayan realizado transacciones no autorizadas. Si identificas cargos no autorizados, debes comunicarte de inmediato con la entidad financiera que emitió tu tarjeta AccessBank. Por lo general, encontrarás el número de atención al cliente de tu institución financiera en el reverso de la tarjeta o en tus estados de cuenta."
          />
          <QuestionAndAnswer
            question="¿Cómo puedo obtener una tarjeta de reposición?"
            answer="AccessBank puede asistirte para obtener una tarjeta de reposición trabajando en conjunto con la entidad financiera que emitió tu tarjeta. Para emitir una tarjeta de reposición, es necesario que tu institución financiera autorice un nuevo número de cuenta y proceda con la emisión de la tarjeta de reemplazo."
          />
          <QuestionAndAnswer
            question="Mi pregunta no aparece en la lista."
            answer="Si tu pregunta no aparece en la lista, te sugerimos que te pongas en contacto con la institución financiera que emitió tu tarjeta AccessBank, ya que solo ellos poseen la información específica de tu cuenta. Por lo general, encontrarás el número de atención al cliente de tu institución financiera en el reverso de la tarjeta o en tus estados de cuenta."
          />
          <QuestionAndAnswer
            question="¿Tarjeta extraviada o robada?"
            answer="Si has sido víctima de un robo de tarjeta de crédito, has extraviado tu tarjeta o necesitas ayuda para ubicar un cajero automático, estamos aquí para asistirte las 24 horas del día, los 365 días del año. Comunícate para hablar con un representante con respecto a: • Tarjetas robadas o extraviadas • Reposición de emergencia de tarjetas • Adelantos de efectivo de emergencia • Cómo ubicar un cajero automático que acepte las marcas AccessBank • Preguntas sobre los beneficios aplicables de tarjetas"
          />
        </>
      ),
    },
    {
      question: "Comunicar un fraude",
      content: (
        <>
          <QuestionAndAnswer
            question="Recibí un correo electrónico/una llamada telefónica de AccessBank para hablarme de mi cuenta, pero parece ser un correo electrónico fraudulento o phishing. ¿Qué debo hacer?"
            answer="AccessBank nunca solicitará información personal ni datos de la cuenta del cliente a través de correo electrónico o llamadas telefónicas no solicitadas. Si sospechas que has recibido un correo electrónico fraudulento o una llamada sospechosa, es importante que no respondas ni proporciones ninguna información personal. Comunícate directamente con AccessBank utilizando los datos de contacto que aparecen en su sitio web oficial o en tus documentos bancarios para informar sobre la situación. Además, puedes reenviar el correo electrónico o proporcionar detalles de la llamada sospechosa a AccessBank para que puedan tomar las medidas adecuadas."
          />
          <QuestionAndAnswer
            question="Me llamaron para ofrecerme una tasa más baja para mi tarjeta AccessBank, pero me parece que se trata de una estafa. ¿Qué debo hacer?"
            answer="Si recibiste una llamada telefónica no solicitada ofreciéndote una tasa más baja para tu tarjeta AccessBank y sospechas que puede ser una estafa, es importante que no compartas información personal ni realices ninguna transacción telefónica. AccessBank no realiza llamadas no solicitadas para ofrecer tasas más bajas u otros servicios sin previa solicitud. Para verificar la autenticidad de la llamada y proteger tus datos, comunícate directamente con AccessBank utilizando los datos de contacto proporcionados en su sitio web oficial o en tus documentos bancarios. Informa sobre la llamada sospechosa y sigue las instrucciones del banco para proteger tus cuentas."
          />
          <QuestionAndAnswer
            question="Creo que se han realizado compras fraudulentas con mi tarjeta de crédito o débito AccessBank. ¿Cómo lo denuncio?"
            answer="Si sospechas que se han realizado compras fraudulentas con tu tarjeta de crédito o débito AccessBank, debes comunicarte de inmediato con AccessBank utilizando los datos de contacto proporcionados en su sitio web oficial o en tus documentos bancarios. El banco te guiará en el proceso de denuncia y tomará las medidas necesarias para investigar las transacciones sospechosas y proteger tu cuenta. Además, es recomendable que sigas las instrucciones del banco para asegurar tu tarjeta y actualizar tu información de seguridad."
          />
          <QuestionAndAnswer
            question="Sé quién cometió fraude con mi tarjeta de crédito o débito AccessBank. ¿Cómo lo denuncio?"
            answer="Si tienes información sobre una persona que ha cometido fraude utilizando tu tarjeta de crédito o débito AccessBank sin tu consentimiento, debes comunicarte de inmediato con AccessBank utilizando los datos de contacto proporcionados en su sitio web oficial o en tus documentos bancarios. Informa al banco sobre la situación y proporciona los detalles pertinentes para que puedan iniciar una investigación. AccessBank te guiará en el proceso de denuncia y tomará las medidas necesarias para proteger tu cuenta y colaborar con las autoridades competentes en la investigación del fraude."
          />
          <QuestionAndAnswer
            question="Creo que alguien solicitó una tarjeta AccessBank a mi nombre. ¿Qué debo hacer?"
            answer="Si sospechas que alguien ha solicitado una tarjeta AccessBank a tu nombre sin tu autorización, debes comunicarte de inmediato con AccessBank utilizando los datos de contacto proporcionados en su sitio web oficial o en tus documentos bancarios. Informa sobre la situación y proporciona los detalles relevantes para que puedan tomar las medidas necesarias, como cancelar la solicitud y proteger tu identidad. Además, es recomendable que sigas las instrucciones del banco para asegurar tu cuenta y actualizar tus medidas de seguridad para prevenir futuros incidentes."
          />
        </>
      ),
    },
    {
      question: "Telefónica o Correo Electrónico Fraudulento",
      content: (
        <>
          <QuestionAndAnswer
            question="Me llamaron para ofrecerme una tasa más baja para mi tarjeta AccessBank, pero me parece que se trata de una estafa. ¿Qué debo hacer?"
            answer="Recuerda que AccessBank no se comunica con sus clientes para solicitar información personal, incluyendo información de la cuenta de tarjeta de crédito o débito. Si recibes una llamada telefónica, correo electrónico, mensaje de texto o solicitud en las redes sociales de alguien que dice ser representante de AccessBank: NO RESPONDAS.
Los clientes de AccessBank deben siempre proteger su información personal y no responder a correos electrónicos ni otras preguntas sospechosas.
Si sospechas que has sido víctima de una estafa o fraude, te recomendamos que te pongas en contacto con AccessBank de inmediato utilizando los datos de contacto proporcionados en su sitio web oficial o en tus documentos bancarios. Informa sobre la llamada sospechosa y sigue las instrucciones del banco para proteger tus cuentas y reportar cualquier actividad fraudulenta."
          />
        </>
      ),
    },
    {
      question: "Soporte de Navegador",
      content: (
        <>
          <QuestionAndAnswer
            question="¿Tiene problemas para acceder a acces.com?"
            answer="Este sitio está optimizado para los siguientes navegadores:"
          />
          <ul className="py-2 text-orange list-disc mx-5">
            <li>Google Chrome (última versión)</li>
            <li>Firefox (última versión)</li>
            <li>Safari (última versión)</li>
            <li>Edge (última versión)</li>
          </ul>

          <p>
            Si tiene problemas para acceder al sitio, pruebe con un navegador alternativo o actualice su navegador a la última versión.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="flex flex-col  items-center min-h-screen bg-gradient-to-t from-dark via-gray to-dark relative">
    <div className="z-10  md:w-3/5 w-full flex flex-col text-center">
      <h2 className="md:text-4xl  text-2xl font-bold text-orange mt-5 text-center">
        <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
          Preguntas Frecuentes
        </span>
      </h2>
      <section className="bg-transparent flex flex-col w-full mt-10 ">
        {faqItems.map((item, index) => (
          <FaqItem
            question={item.question}
            content={item.content}
            key={index}
          />
        ))}
      </section>
    </div>

  </main>
  );
};

const FaqItem = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col border-dark border my-2 rounded-xl">
    <div
      className="flex justify-between px-6 items-center h-[46px] cursor-pointer hover:bg-gray transition-colors rounded-xl"
      onClick={toggleOpen}
    >
      <h3 className="text-orange text-left md:text-xl">{question}</h3>
      {isOpen ? (
        <AiOutlineMinus className="fill-orange md:w-6 md:h-6 transition-all ease-in duration-300" />
      ) : (
        <AiOutlinePlus className="fill-orange md:w-6 md:h-6 transition-all ease-out duration-500" />
      )}
    </div>
    <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-6 py-4 flex-wrap flex justify-start text-left transition-all duration-300 md:text-base text-xs`}
      >
        <p className={`${
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
        } transition-opacity duration-300`}>
      {content}</p>
    </div>
  </div>
  );
};

export default FAQPage;
