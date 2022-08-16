import React, { useEffect } from "react";

import ContentContacts from "./components/ContentContacts";

const ContactsPage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div>
      <ContentContacts />
    </div>
  );
};

export default ContactsPage;
