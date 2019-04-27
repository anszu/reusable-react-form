// Validation module providing public methods for validating inputs

const Validation = () => {
    const errorHints = {
        required: 'Please fill out field!',
        is_number: 'Please use a numeric value!'
    }

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