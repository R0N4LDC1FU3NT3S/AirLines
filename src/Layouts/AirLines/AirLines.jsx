import PropTypes from "prop-types"
import { withFormik, Form, Field, ErrorMessage } from "formik"
import Swal from "sweetalert2"

import Nav from "../../Navigations/Nav.jsx"
import Select from "../../Components/Select"

// Styles
import "./AirLines.scss"

const AirLines = ({ location, handleChange, handleBlur }) => {
	const path = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

	return (
		<>
			<Nav />
			<div className="AirLines">
				<h1>
					Hola, bienvenido, sabemos que quieres viajar en un <strong>{path}</strong>, por favor diligencia el siguiente formulario:
				</h1>
				<div className="AirLines-container">
					<Form className="AirLines-container-form">
						<Field name="name" className="input" type="text" placeholder="Nombre" />
						<ErrorMessage name="name">{message => <div className="field-error">{message}</div>}</ErrorMessage>
						<Field name="email" className="input" type="email" placeholder="Email" />
						<ErrorMessage name="email">{message => <div className="field-error">{message}</div>}</ErrorMessage>
						<Field name="cellphone" className="input" type="number" placeholder="Nº Celular" />
						<ErrorMessage name="cellphone">{message => <div className="field-error">{message}</div>}</ErrorMessage>
						<Select name="age" onChange={handleChange} onBlur={handleBlur} />
						<ErrorMessage name="age">{message => <div className="field-error">{message}</div>}</ErrorMessage>
						<button className="button" type="submit">
							Iniciar sesión
						</button>
					</Form>
				</div>
			</div>
		</>
	)
}

AirLines.propTypes = {
	location: PropTypes.any,
	history: PropTypes.any,
	handleChange: PropTypes.any,
	handleBlur: PropTypes.any
}

export default withFormik({
	mapPropsToValues(props) {
		return {
			name: "",
			email: "",
			cellphone: "",
			age: ""
		}
	},
	validate(values) {
		const errors = {}

		if (!values.name) {
			errors.name = "El nombre es requerido*"
		}

		if (/[^a-zA-Z0-9]/.test(values.name)) {
			errors.name = "No se permiten caracteres especiales*"
		}

		if (!values.email) {
			errors.email = "El correo es requerido*"
		}

		if (!values.cellphone) {
			errors.cellphone = "El numero de celular es requerido*"
		}

		if (!values.age) {
			errors.age = "La edad es requerida*"
		}
		return errors
	},
	handleSubmit(values, { props, resetForm, setSubmitting }) {
		setSubmitting(false)
		const { name, email, cellphone, age } = values

		console.log("Submit", { name, email, cellphone, age })

		let timerInterval
		Swal.fire({
			icon: "success",
			title: "¡Completado!",
			html: "<h3>Tu información fue enviada con éxito, estaremos en contacto con tigo.</h3>Esta ventana se cerrará en <b></b> milisegundos.",
			timer: 5000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading()
				const b = Swal.getHtmlContainer().querySelector("b")
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft()
				}, 100)
			},
			willClose: () => {
				clearInterval(timerInterval)
			}
		}).then(result => {
			resetForm()
		})
	}
})(AirLines)
