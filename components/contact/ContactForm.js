import Button from "../ui/Button"

const ContactForm = () => {
    return (<div>
        <form>
            <label htmlFor='phone'>phone</label>
            <input id='tel' />
            <label htmlFor='message'>message</label>
            <textarea id='message' />
            <Button>send</Button>
        </form>
    </div>);
};

export default ContactForm;