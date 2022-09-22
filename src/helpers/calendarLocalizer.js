import { dateFnsLocalizer } from 'react-big-calendar'; // yarn add react-big-calendar
import { format, parse, startOfWeek, getDay } from 'date-fns'; //yarn add date-fns

// import enUS from 'date-fns/locale/en-US' //Ingles
import enES from 'date-fns/locale/es' // español

const locales = {
    'es': enES,
  }
  
  export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });