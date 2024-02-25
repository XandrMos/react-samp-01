// import React from 'react';

import User from '../User';

//It's component too.
const NewApp = function() {
    //Для повторного використання декілька компонентів обгортають тегом
    //Властивості компонента визначаються так ніби це атрибути тега
    return (
    <div>  
      <User name = "Oleh" group = "26"/>
      <User name = "Nina" group = "25"/>
    </div>)
  };

  export default NewApp;