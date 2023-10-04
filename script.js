function agregarElementosP(elementoDiv, nombre, descripcion) {
        const nombreElement = document.createElement('p');
        nombreElement.textContent = nombre;
    
        const descripcionElement = document.createElement('p');
        descripcionElement.textContent = descripcion;
    
        elementoDiv.appendChild(nombreElement);
        elementoDiv.appendChild(descripcionElement);
    }
    
    function agregarImagenesALosDivs() {
        const elementosDiv = document.querySelectorAll('div');
        
        elementosDiv.forEach((elementoDiv) => {
            const elementoImagen = document.createElement('img');
            elementoImagen.setAttribute('src', 'img/' + elementoDiv.className);
            elementoDiv.append(elementoImagen);
        });
    }
    
    const estudiantes = document.querySelectorAll('#estudiante');
    estudiantes.forEach((estudianteDiv) => {
        const nombre = estudianteDiv.dataset.nombre;
        const descripcion = estudianteDiv.dataset.descripcion;
        agregarElementosP(estudianteDiv, nombre, descripcion);
    });
    
    const universidad = document.querySelectorAll('#universidad');
    universidad.forEach((universidadDiv) => {
        const nombre = universidadDiv.dataset.nombre;
        const descripcion = universidadDiv.dataset.descripcion;
        agregarElementosP(universidadDiv, nombre, descripcion);
    });
    
    const colegio = document.querySelectorAll('#colegio');
    colegio.forEach((colegioDiv) => {
        const nombre = colegioDiv.dataset.nombre;
        const descripcion = colegioDiv.dataset.descripcion;
        agregarElementosP(colegioDiv, nombre, descripcion);
    });
    
    agregarImagenesALosDivs();
    
    const elementosDiv = document.querySelectorAll('div');
    console.log(elementosDiv);
  

    
    
    