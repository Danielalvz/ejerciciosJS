const getPerimeterRectangle = function(base, height) {
    let perimeter = 0;

    if (typeof base !== "number" || typeof height !== "number") {
        console.log("Ambos parámetros deben ser números.");
        return;
    }
    
    if(base === height) {
        perimeter = base * 4;
    } else {
        perimeter = (base * 2) + (height * 2);
    }
    
    console.log(`El perímetro es ${perimeter}`);

    if(perimeter > 100) {
        console.log("El perímetro es muy grande");       
    } else {
        console.log("Este perímetro no es muy grande");       
    }
}

getPerimeterRectangle(10, 20); 
getPerimeterRectangle(30, 30);
getPerimeterRectangle(50, 10); 
getPerimeterRectangle("30", 30);