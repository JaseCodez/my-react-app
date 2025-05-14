import './Contact.css'
import contact from '../../images/contact'

interface Props {
    name: string, 
    content: string, 
    icon: string, 
    link: string, 

}

function Contact() {
    return (
        <div className='contact'>
            <div className='link-container'>
                {contact.map((contact: Props)=>{
                    return <div className='contact-row'>
                        <a className='contact-link' href={contact.link} target='_blank'><img className='icon' src={contact.icon}/></a>
                        <a className='contact-link' href={contact.link} target='_blank'>{contact.content}</a>
                    </div>
                })}     

            </div>
        </div>
    );
}

export default Contact;