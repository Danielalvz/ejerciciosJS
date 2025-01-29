const averageToApproval = 6;
let studentAverage = 4;
let pointsToApprove =  averageToApproval - studentAverage;

console.log("El alumno tiene un promedio mayor o igual que el requerido:",
    studentAverage == averageToApproval
);

console.log(`Al alumno le faltaron ${pointsToApprove} para aprobar`);
