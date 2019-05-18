export function getDifferenceYear(year) {
    return new Date().getFullYear() - year;
 }
 
 export function calculateBrand( model ) {
     let increment;
 
     switch (model) {
         case 'europeo':
            increment = 1.30;
             break;
         case 'americano':
            increment = 1.15;
             break;
         case 'asiatico':
            increment = 1.05;
             break;
         default:
             break;
     }
 
     return increment;
 }
 export function getIncrementPlan( plan ) {
     return (plan === 'Basico') ? 1.20 : 1.50;
 }