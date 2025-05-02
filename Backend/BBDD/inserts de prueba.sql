-- Insertar Categorías
INSERT INTO Categorias (nombre, descripcion) VALUES
('Desarrollo Web', 'Vacantes relacionadas con el desarrollo frontend y backend.'),
('Marketing Digital', 'Ofertas en publicidad digital, SEO y redes sociales.'),
('Diseño Gráfico', 'Puestos de trabajo en diseño visual y branding.');

-- Insertar Usuarios
INSERT INTO Usuarios (email, nombre, apellidos, password, enabled, fecha_Registro, rol) VALUES
('empresa1@correo.com', 'Carlos', 'López García', 'pass1234', 1, '2025-01-15', 'EMPRESA'),
('empresa2@correo.com', 'Laura', 'Pérez Díaz', 'pass5678', 1, '2025-01-20', 'EMPRESA'),
('admin@admin.com', 'Admin', 'Root', 'adminpass', 1, '2025-01-01', 'ADMIN'),
('cliente1@correo.com', 'Ana', 'Martínez Ruiz', 'clientepass1', 1, '2025-02-05', 'CLIENTE'),
('cliente2@correo.com', 'David', 'Sánchez Torres', 'clientepass2', 1, '2025-02-07', 'CLIENTE');

-- Insertar Empresas
INSERT INTO Empresas (cif, nombre_empresa, direccion_fiscal, pais, email) VALUES
('B12345678', 'Tech Solutions S.L.', 'Calle Falsa 123, Madrid', 'España', 'empresa1@correo.com'),
('C87654321', 'Marketing Creativo S.A.', 'Av. del Mar 45, Barcelona', 'España', 'empresa2@correo.com');

-- Insertar Vacantes
INSERT INTO Vacantes (nombre, descripcion, fecha, salario, estatus, destacado, imagen, detalles, id_Categoria, id_empresa) VALUES
('Desarrollador Backend Java', 'Puesto para desarrollador con experiencia en Spring Boot.', '2025-03-01', 32000, 'CREADA', 1, 'backend.jpg', 'Horario flexible, trabajo híbrido.', 1, 1),
('Especialista SEO', 'Responsable del posicionamiento orgánico.', '2025-03-05', 28000, 'CREADA', 0, 'seo.jpg', 'Requisitos: experiencia mínima 2 años en SEO técnico.', 2, 2),
('Diseñador UI/UX', 'Diseño de interfaces intuitivas y experiencia de usuario.', '2025-03-10', 30000, 'CREADA', 1, 'uiux.jpg', 'Uso avanzado de Figma y Adobe XD.', 3, 1);

-- Insertar Solicitudes
INSERT INTO Solicitudes (fecha, archivo, comentarios, estado, curriculum, id_Vacante, email) VALUES
('2025-03-15', 'archivo_cv1.pdf', 'Me interesa mucho la vacante de Java.', 0, 'cv1.pdf', 1, 'cliente1@correo.com'),
('2025-03-16', 'archivo_cv2.pdf', 'Tengo experiencia en SEO en agencias.', 0, 'cv2.pdf', 2, 'cliente2@correo.com'),
('2025-03-17', 'archivo_cv3.pdf', 'Gran interés en diseño de interfaces.', 0, 'cv3.pdf', 3, 'cliente1@correo.com');