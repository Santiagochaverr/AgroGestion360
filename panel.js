// AgroGestion360 - Interactividad profesional

document.addEventListener('DOMContentLoaded', function() {
    // === Botón "Marcar como listo" en Lavar cocheras ===
    const btnCompletar = document.getElementById('completarLimpieza');
    if (btnCompletar) {
        btnCompletar.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cambiar visualmente el estado
            const progressDiv = this.closest('.task-body').querySelector('.progress-indicator');
            if (progressDiv) {
                progressDiv.innerHTML = '<span>Completado hoy</span> <i class="fas fa-circle-check" style="color:#2e7d32;"></i>';
                progressDiv.style.background = '#d0e8d0';
            }
            
            // Deshabilitar botón y cambiar texto
            this.innerHTML = '<i class="fas fa-check-double"></i> Listo';
            this.disabled = true;
            this.style.opacity = '0.8';
            this.style.cursor = 'default';
            
            // Feedback sutil
            mostrarNotificacion('✅ Tarea marcada como completada', '#2e7d32');
        });
    }

    // === Botón Actualizar (simula recarga de datos) ===
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            mostrarNotificacion('🔄 Datos sincronizados', '#1b5e20');
            // Podrías agregar animación de fade en las cards
            document.querySelectorAll('.card').forEach(card => {
                card.style.transition = 'opacity 0.3s';
                card.style.opacity = '0.6';
                setTimeout(() => card.style.opacity = '1', 200);
            });
        });
    }

    // === Botón Nueva tarea ===
    const addBtn = document.getElementById('addTaskBtn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            mostrarNotificacion('📋 Formulario de nueva tarea (demo)', '#ed6c02');
        });
    }

    // === Botón Reporte ===
    const reportBtn = document.querySelector('.btn-report');
    if (reportBtn) {
        reportBtn.addEventListener('click', function() {
            mostrarNotificacion('📄 Generando reporte PDF... (simulado)', '#795548');
        });
    }

    // === Botones de más opciones (ellipsis) ===
    document.querySelectorAll('.btn-more').forEach(btn => {
        btn.addEventListener('click', function() {
            const cardTitle = this.closest('.card-header')?.querySelector('h2')?.innerText || 'opciones';
            mostrarNotificacion(`⚙️ Menú de ${cardTitle} (demo)`, '#2e7d32');
        });
    });

    // === Chips de días (pequeña interacción) ===
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', function() {
            this.style.background = '#c8e6c9';
            setTimeout(() => this.style.background = '#ffffffcc', 200);
            mostrarNotificacion(`📅 ${this.innerText.trim()} seleccionado`, '#1b5e20', 1500);
        });
    });

    // === Función global de notificación (toast) ===
    function mostrarNotificacion(mensaje, colorFondo = '#323232', duracion = 2000) {
        // Crear o reutilizar contenedor de notificaciones
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.style.position = 'fixed';
            toastContainer.style.bottom = '20px';
            toastContainer.style.left = '50%';
            toastContainer.style.transform = 'translateX(-50%)';
            toastContainer.style.zIndex = '9999';
            toastContainer.style.display = 'flex';
            toastContainer.style.flexDirection = 'column';
            toastContainer.style.alignItems = 'center';
            toastContainer.style.gap = '10px';
            toastContainer.style.pointerEvents = 'none';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.innerText = mensaje;
        toast.style.background = colorFondo;
        toast.style.color = 'white';
        toast.style.padding = '12px 28px';
        toast.style.borderRadius = '60px';
        toast.style.fontWeight = '500';
        toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        toast.style.backdropFilter = 'blur(4px)';
        toast.style.border = '1px solid rgba(255,255,255,0.2)';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease, transform 0.2s';
        toast.style.transform = 'translateY(20px)';
        toast.style.pointerEvents = 'none';

        toastContainer.appendChild(toast);

        // Animación entrada
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 10);

        // Eliminar después de duración
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
                if (toastContainer.children.length === 0) toastContainer.remove();
            }, 300);
        }, duracion);
    }
});