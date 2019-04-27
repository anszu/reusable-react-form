// Validation module providing public methods for validating inputs

const Validation = () => {
    return {
        isEmpty: function (value) {
            return value == undefined;
        },
        mapErrors: function(validationScheme) {
            const errors = {};
            const errorScheme = {
                required: 'Please fill out field!',
                is_number: 'Please use a numeric value!'
            }

            Object.keys(validationScheme).forEach((item) => {
                Object.keys(validationScheme[item]).forEach((rule) => {
                    if(validationScheme[item][rule]){
                        errors[item] = errors[item] ? `${errors[item]} ${errorScheme[rule]}` : errorScheme[rule];
                    }
                });
            });
            return errors;
        } 
    }
};

export default Validation;