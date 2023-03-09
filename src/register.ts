
/* IMPORT */

import {KEYS, HTML} from './constants';

/* MAIN */

const register = ( parseHTML: (( html: string ) => (Window & typeof globalThis) | null) ): void => {

  const global = parseHTML ( HTML );

  if ( !global ) throw new Error ( 'Failed to register linkedom globally' );

  for ( let i = 0, l = KEYS.length; i < l; i++ ) {

    const key = KEYS[i];

    globalThis[key] ||= global[key];

  }

};

/* EXPORT */

export default register;
