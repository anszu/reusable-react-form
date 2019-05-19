// Validation module providing public methods for validating inputs
import { errorHints } from './ValidationErrors.js'

const Validation = () => {
    return {
        isEmpty: function (value) {
            return value == undefined;
        },
        mapErrors: function(validationScheme) {
            const errors = {};
            Object.keys(validationScheme).forEach((item) => {
                Object.keys(validationScheme[item]).forEach((rule) => {
                    if(validationScheme[item][rule]){
                        errors[item] = errors[item] ? `${errors[item]} ${errorHints[rule]}` : errorHints[rule];
                    }
                });
            });
            return errors;
        } 
    }
};

export default Validation;