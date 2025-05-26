import './Contact.css'
import contact from '../../images/contact'
import { IconType } from 'react-icons';

interface Props {
    name: string, 
    content: string, 
    Icon: IconType, 
    link: string, 

}


function Contact() {

    return (
        <div className='contact'>
            <div className='link-container'>
                {contact.map((contact: Props)=>{
                    return <div className='contact-row'>
                        <a className='contact-link' href={contact.link} target='_blank'>
                            <contact.Icon className='icon' size={45} />
                        </a>
                    </div>
                })}     

            </div>
        </div>
    );
}

export default Contact;