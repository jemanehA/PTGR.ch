import React, { useEffect } from 'react';
import ISO from '../components/IcoTokenManagement';
const ISOO = () => {
    useEffect(() => { document.title = 'PTGR AG ISO';
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  
  return (
    <div>
    <ISO/>
    </div>
  );
};

export default ISOO;
