import React from "react"

import validation from "./validate"


function Form(props) {
    const [userData, setUserData] = React.useState({
        dni: "",
        usuario: "",
        clave: ""
    })

    const [errors, setErrors] = React.useState({
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(
            validation({
                ...userData,
                [name]: value
            })
        )
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        props.login(userData)
    };

    return (

        <div className={style.container}>
            <div className="login">
                <form onSubmit={handleSubmit} className={style.form}>
                    <div>
                        <div className="dni">

                            <label>Numero de documento</label>
                            <input className="input"
                                placeholder="Numero de documento"
                                type="number"
                                name="dni"
                                value={userData.dni}
                                onChange={handleInputChange}

                            />
                            <p className="error">{errors.dni}</p>
                        </div>
                        <div className="usuario">

                            <label>Usuario</label>
                            <input className="input"
                                placeholder="Usuario"
                                type="number"
                                name="usuario"
                                value={userData.usuario}
                                onChange={handleInputChange}
                            />
                            <p className="error">{errors.usuario}</p>
                        </div>
                        <div className="clave">

                            <label>Clave</label>
                            <input className="input"
                                placeholder="Clave"
                                type="password"
                                name="clave"
                                value={userData.clave}
                                onChange={handleInputChange}

                            />
                            <p className="error">{errors.clave}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form