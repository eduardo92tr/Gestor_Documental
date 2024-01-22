const id_carpeta = document.querySelector('#id_carpeta');
let tbl;
document.addEventListener('DOMContentLoaded', function() {
    if (!$.fn.DataTable.isDataTable('#tblDetalle')) { // Inicializar DataTables solo si no ha sido aplicado previamente -Hecho por chatGPT
        tbl = $('#tblDetalle').DataTable({
            ajax: {
                url: base_url + 'admin/listardetalle/' + id_carpeta.value,
                dataSrc: ''
            },
            columns: [
                
                { data: 'acciones' },
                { data: 'correo' },
                { data: 'nombre' },
                { data: 'estado' }
                
            ],
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json'
            },
            responsive: true,
            destroy: true,
            order: [[1, 'desc']],
        });
    }
})

function eliminarDetalle(id) {
    const url = base_url + 'archivos/eliminarCompartido/' + id;
    eliminarRegistro('ESTA SEGURO DE ELIMINAR', 'EL ARCHIVO COMPARTIDO SE ELIMINARA DE FORMA PERMANENTE EN 30 DIAS', 'SI ELIMINAR', url, tbl)
}