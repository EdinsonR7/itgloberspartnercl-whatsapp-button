import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'


type Props = {
    logo: string    //Whatsapp.png
    phone: string   //3102222255
    message: string //Bienvenido es un gusto atenderte en que podemos servirte.
    width: number //60px
    height: number //60px


}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {


  const CSS_HANDLES = ['whatsapp_logo', 'whatsapp_hove']
  const handles = useCssHandles(CSS_HANDLES)
  const formattedMessage = message.replace(/ /g, " ")

// console.log("Mi mensaje formateado es", formattedMessage, logo)

    return <>
        <div className={`${handles['whatsapp_hove']}`}>
            <a
                href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                className={`${handles['whatsapp_logo']}`}
                src={logo}
                width={width}
                height={height}
                alt="Logo de WhatsApp"
                />
            </a>
        </div>
    </>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number

}
WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3102222255",
    message: "Si tienes alguna inquietud comunicate con nosotros",
    width: 43,
    height: 47


}
WhatsappButton.schema = {
    title: "Botón de Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de Whatsapp que se relacione con oportunidades",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Teléfono",
            description: "Agrega número de télefono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega el mensaje que se verá para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Teléfono",
            description: "Agrega  el número de télefono",
            type: "number",
        },
        height: {
            title: "Teléfono",
            description: "Agrega el número de télefono",
            type: "number",
        }

    }
}

export default WhatsappButton;
