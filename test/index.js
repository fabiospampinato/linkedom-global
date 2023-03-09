
/* IMPORT */

import {describe} from 'fava';
import {KEYS}  from '../dist/constants.js';

/* MAIN */

describe ( 'Linkedom Global', it => {

  it ( 'works', async t => {

    for ( const key of KEYS ) {
      if ( key === 'Event' ) continue;
      if ( key === 'EventTarget' ) continue;
      t.true ( typeof globalThis[key] === 'undefined' );
    }

    await import ( '../dist/variants/default.js' );

    for ( const key of KEYS ) {
      t.true ( typeof globalThis[key] === 'object' || typeof globalThis[key] === 'function' );
    }

  });

});
