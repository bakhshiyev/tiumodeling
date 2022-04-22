import { Fragment, useState } from 'react';

import ContactForm from '../../components/contact/ContactForm';
import Button from '../../components/ui/Button';

function Contact() {
    const [showMessageForm, setShowMessageForm] = useState(false);

    const toggleMessageForm = () => {
        setShowMessageForm((prevState) => {
            return !prevState;
        });
    };

    return (
        <Fragment>
            <h1>contact | əlaqə</h1>
            <p>Abşeron | Bakı, Azərbaycan</p>
            <p>+994</p>
            <button onClick={toggleMessageForm}>message us</button>
            {showMessageForm && <ContactForm />}
        </Fragment>
    );
}

export default Contact;