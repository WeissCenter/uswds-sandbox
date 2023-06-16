import * as uswdsInit from '@uswds/uswds/dist/js/uswds-init.js'
import * as uswds from '@uswds/uswds';



export function uswdsInitComponents(){
  return uswds.initComponents()
}

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
