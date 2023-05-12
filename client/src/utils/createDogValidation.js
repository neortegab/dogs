export default function validation(inputs){
    let errors = {
        breed: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        minLifeSpan: "",
        maxLifeSpan: "",
        temperaments: [],
    };
    if(inputs){
        if(inputs.breed === ''){
            errors.breed = 'Breed can\'t be empty';
        }
        if(inputs.minHeight === '' || parseInt(inputs.minHeight) < 0){
            errors.minHeight = 'Minimum height must be a number';   
        }
        if(inputs.maxHeight === '' || parseInt(inputs.maxHeight) < 0){
            errors.maxHeight = 'Maximum height must be a number';   
        }
        if(parseInt(inputs.minHeight) > parseInt(inputs.maxHeight)){
            errors.minHeight = 'Minimum height can\'t be greater than maximum height';
        }
        if(inputs.minWeight === '' || parseInt(inputs.minWeight) < 0){
            errors.minWeight = 'Minimum weight must be a number';   
        }
        if(inputs.maxWeight === '' || parseInt(inputs.maxWeight) < 0){
            errors.maxWeight = 'Maximum weight must be a number';   
        }
        if(parseInt(inputs.minWeight) > parseInt(inputs.maxWeight)){
            errors.minWeight = 'Minimum weight can\'t be greater than maximum weight';
        }
        if(inputs.minLifeSpan === '' || parseInt(inputs.minLifeSpan) < 0){
            errors.minLifeSpan = 'Minimum life span must be a number';   
        }
        if(inputs.maxLifeSpan === '' || parseInt(inputs.maxLifeSpan) < 0){
            errors.maxLifeSpan = 'Maximum life span must be a number';   
        }
        if(parseInt(inputs.minLifeSpan) > parseInt(inputs.maxLifeSpan)){
            errors.minLifeSpan = 'Minimum life span can\'t be greater than maximum life span';
        }
        inputs.temperaments.forEach(temperament => {
            if(temperament === ''){
                errors.temperaments = 'Temperaments can\'t be empty';
            }
        });
    }
    return errors;
}