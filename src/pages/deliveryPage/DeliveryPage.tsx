import React, { useEffect } from "react";

import { DiliveryContent } from "./components/DiliveryContent";

const DeliveryPage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div>
      <DiliveryContent />
    </div>
  );
};

export default DeliveryPage;
