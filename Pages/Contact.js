import React from 'react';
import ContactComponent from '../Components/Contact/Contact';
function Contact(props){
    const {navigation} = props;
    return (
        <ContactComponent navigation={navigation} />
    );
}
export default Contact;