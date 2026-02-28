// Generar los días de noviembre 2025 en el calendario
document.addEventListener('DOMContentLoaded', function() {
    const daysGrid = document.getElementById('daysGrid');
    
    // Noviembre 2025: 30 días, empieza en sábado (según imagen: 1 = sábado)
    // Ajustamos: si 1 es sábado, entonces día de semana índice 6 (sábado)
    const firstDayIndex = 6; // 0=lunes ... 6=domingo? pero en la imagen Lunes primero? 
    // La imagen muestra L M X J V S D, y el 1 cae en S? Revisando: en el calendario de la imagen, el 1 está en S (sábado)
    // Para que coincida con la imagen, asumimos que el 1 de nov 2025 es sábado (índice 5 si L=0? Cuidado)
    // Simplificamos: la imagen tiene 1 en S (sábado). Nuestra semana empieza L=0, M=1, X=2, J=3, V=4, S=5, D=6.
    // Si el 1 es sábado → índice 5. Necesitamos celdas vacías antes.
    // Según la imagen: 1 (S), 2 (D), 3 (L), etc.
    
    const totalDays = 30;
    const startOffset = 5; // 5 celdas vacías antes del día 1 (para L M X J V)
    
    daysGrid.innerHTML = '';
    
    // celdas vacías de días previos
    for (let i = 0; i < startOffset; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'day-cell empty';
        daysGrid.appendChild(emptyDiv);
    }
    
    // días del mes
    for (let d = 1; d <= totalDays; d++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-cell';
        dayDiv.textContent = d;
        
        // resaltar días 13-17 como en la imagen (badge)
        if (d >= 13 && d <= 17) {
            dayDiv.classList.add('highlight');
        }
        
        daysGrid.appendChild(dayDiv);
    }
    
    // Nota: no necesitamos rellenar más celdas porque total 30 + offset llega a 35, perfecto para 5 filas.
});