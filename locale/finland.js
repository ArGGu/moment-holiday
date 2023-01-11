//! moment-holiday.js locale configuration
//! locale : Finland
//! author : Kodie Grantham : https://github.com/kodie

(function (root, factory) {
    "use strict";

    /*global define*/
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('moment')); // Node
    } else if (typeof define === 'function' && define.amd) {
        define(['moment'], factory);                 // AMD
    } else {
        factory(root.moment);                        // Browser
    }
}(this, function (moment) {
  moment.holidays.finland = {
    "Uudenvuodenpäivä": {
      date: '1/1',
      keywords: ['uudenvuodenpaiva', 'new', 'year']
    },
    "Loppiainen": {
      date: '1/6'
    },
    "Pitkäperjantai": {
      date: 'easter-2',
      keywords: ['pitkaperjantai', 'good', 'friday']
    },
    "Toinen Pääsiäispäivä": {
      date: 'easter+1',
      keywords: ['paasiaispaiva', 'easter', 'monday'],
    },
    "Vappu": {
      date: '5/1'
    },
    "Helatorstai": {
      date: 'easter+39',
      keywords: ['ascension']
    },
    "Juhannusaatto": {
      date: '6/(5,[19])',
      keywords: ['juhannusaatto']
    },
    "Itsenäisyyspäivä": {
      date: '12/6',
      keywords: ['itsenaisyyspaiva']
    },
    "Jouluaatto": {
      date: '12/24',
      keywords: ['jouluaatto']
    },
    "Joulupäivä": {
      date: '12/25',
      keywords: ['joulupaiva', 'christmas']
    },
    "Tapaninpäivä": {
      date: '12/26',
      keywords: ['tapaninpaiva']
    },
  };

  return moment;
}));
