-- ========================================================
-- 		Inserts para la Tabla Usuarios (10 clientes)
-- ========================================================

INSERT INTO usuario (nombre, apellido, telefono, area_interes, correo, estado, contrasena) VALUES 
('Mateo', 'Hernández', '5512345678', 'Bovino', 'mateo.hernandez@gmail.com', 'Veracruz', '$2a$12$k77rPKdad1R/KyRDcLPsVu5f.VtTAZvbGHhmEF.MowKO4zmHsTYRi'),
-- Ganado*Corral3321 
('Sofía', 'García', '5698765432', 'Porcino', 'sofia.garcia@hotmail.com', 'Jalisco', '$2a$12$2A2A4BNnlnt//M2ifdPsNOnYfYOhE3Hq9JtNyj4EiqwSqdV2zNnki'),
-- Trigo2026!Forrajero
('Santiago', 'López', '5545678901', 'Bovino', 'santiago.lopez@outlook.com', 'Chihuahua', '$2a$12$milAFsLuMglID5Rl46yM3.ZFvc.qFaNndIH7BbozpwM/73OvKdZAC'),
-- Ganado#Bovino987
('Valeria', 'Martínez', '5632109876', 'Aves', 'valeria.martinez@gmail.com', 'Sonora', '$2a$12$UeUFQ3tc7suxIhYj1VqPjeqv2lu8keSE1cVT6FAz0DVt7ytX5Irgm'),
-- Comedero*Zamba21
('Diego', 'González', '5587654321', 'Porcino', 'diego.gonzalez@hotmail.com', 'San Luis Potosí', '$2a$12$96BO1gorBlkM6k0MqlypBe6IFHcXQEKb.XVWJEAWLzqsAGHcfGsey'),
-- Alfalfa$Verde543
('Camila', 'Rodríguez', '5654321098', 'Ovino', 'camila.rodriguez@gmail.com', 'Michoacán', '$2a$12$B/4yIeipG5C3rBCr0CZkJevyUommTIPK9Xu9U4fEWbPpfbzpu2Yam'),
-- Rancho*Patron2026
('Leonardo', 'Pérez', '5523456789', 'Bovino', 'leonardo.perez@outlook.com', 'Chiapas', '$2a$12$DI4DDCGt.YYzDqha9MMEG.fnszYXLdnTFYQX4njBrFpjHCWpAft/S'),
-- Sombra#Toro9981
('Mariana', 'Sánchez', '5678901234', 'Aves', 'mariana.sanchez@gmail.com', 'Tamaulipas', '$2a$12$hLRATqEp4ir7IQvPNdj4YObfavnKEPfjB5g.c0DjJqH9y1WUtAaES'),
-- Establo$Verde456
('Gael', 'Ramírez', '5567890123', 'Ovino', 'gael.ramirez@hotmail.com', 'Durango', 'Bovino*Fierro789'),
-- Bovino*Fierro789
('Ximena', 'Torres', '5689012345', 'Bovino', 'ximena.torres@outlook.com', 'Coahuila', '$2a$12$wU4Ls0IEp0CIq8MemVSLY.wYZoFf0GawLjvTDDHU3j4eU8VXbQYS6');
-- Pradera&Pasto123

-- =================================================================================================
-- 		Inserts para la Tabla Usuarios (2 Admin) | Apartir del id_11 para que no tenga pedidos
-- =================================================================================================
INSERT INTO usuario (nombre, apellido, telefono, area_interes, correo, estado, contrasena, rol) VALUES 
('Admin', 'General', '5599887766', 'Bovino', 'soporte_toro_forrajero@outlook.com', 'CDMX', '$2a$12$DwGRtuKO1ZQkJy3UX69I4ekp6l4pt38C5qGa4G8s0is3aIfNZjtyS', 'admin'),
-- Forraje#Alimento55
('Soporte', 'Sistema', '5500000000', 'Bovino', 'soporte_toro_forrajero@proton.me', 'CDMX', '$2a$12$uBManTSBkjl9z4/960wHgeStzVtUtaTcTJnx7eWuvfYhEBN2Zv0W6', 'admin');
-- Ganado*Corral3321


-- ========================================================
--          Update para la Tabla Usuarios (10 clientes)
-- ========================================================
SET SQL_SAFE_UPDATES = 0;

UPDATE usuario SET nombre = 'Mateo', apellido = 'Hernández', telefono = '5512345678', area_interes = 'Bovino', estado = 'Veracruz', contrasena = '$2a$12$k77rPKdad1R/KyRDcLPsVu5f.VtTAZvbGHhmEF.MowKO4zmHsTYRi' WHERE correo = 'mateo.hernandez@gmail.com';

UPDATE usuario SET nombre = 'Sofía', apellido = 'García', telefono = '5698765432', area_interes = 'Porcino', estado = 'Jalisco', contrasena = '$2a$12$2A2A4BNnlnt//M2ifdPsNOnYfYOhE3Hq9JtNyj4EiqwSqdV2zNnki' WHERE correo = 'sofia.garcia@hotmail.com';

UPDATE usuario SET nombre = 'Santiago', apellido = 'López', telefono = '5545678901', area_interes = 'Bovino', estado = 'Chihuahua', contrasena = '$2a$12$milAFsLuMglID5Rl46yM3.ZFvc.qFaNndIH7BbozpwM/73OvKdZAC' WHERE correo = 'santiago.lopez@outlook.com';

UPDATE usuario SET nombre = 'Valeria', apellido = 'Martínez', telefono = '5632109876', area_interes = 'Aves', estado = 'Sonora', contrasena = '$2a$12$UeUFQ3tc7suxIhYj1VqPjeqv2lu8keSE1cVT6FAz0DVt7ytX5Irgm' WHERE correo = 'valeria.martinez@gmail.com';

UPDATE usuario SET nombre = 'Diego', apellido = 'González', telefono = '5587654321', area_interes = 'Porcino', estado = 'San Luis Potosí', contrasena = '$2a$12$96BO1gorBlkM6k0MqlypBe6IFHcXQEKb.XVWJEAWLzqsAGHcfGsey' WHERE correo = 'diego.gonzalez@hotmail.com';

UPDATE usuario SET nombre = 'Camila', apellido = 'Rodríguez', telefono = '5654321098', area_interes = 'Ovino', estado = 'Michoacán', contrasena = '$2a$12$B/4yIeipG5C3rBCr0CZkJevyUommTIPK9Xu9U4fEWbPpfbzpu2Yam' WHERE correo = 'camila.rodriguez@gmail.com';

UPDATE usuario SET nombre = 'Leonardo', apellido = 'Pérez', telefono = '5523456789', area_interes = 'Bovino', estado = 'Chiapas', contrasena = '$2a$12$DI4DDCGt.YYzDqha9MMEG.fnszYXLdnTFYQX4njBrFpjHCWpAft/S' WHERE correo = 'leonardo.perez@outlook.com';

UPDATE usuario SET nombre = 'Mariana', apellido = 'Sánchez', telefono = '5678901234', area_interes = 'Aves', estado = 'Tamaulipas', contrasena = '$2a$12$hLRATqEp4ir7IQvPNdj4YObfavnKEPfjB5g.c0DjJqH9y1WUtAaES' WHERE correo = 'mariana.sanchez@gmail.com';

UPDATE usuario SET nombre = 'Gael', apellido = 'Ramírez', telefono = '5567890123', area_interes = 'Ovino', estado = 'Durango', contrasena = 'Bovino*Fierro789' WHERE correo = 'gael.ramirez@hotmail.com';

UPDATE usuario SET nombre = 'Ximena', apellido = 'Torres', telefono = '5689012345', area_interes = 'Bovino', estado = 'Coahuila', contrasena = '$2a$12$wU4Ls0IEp0CIq8MemVSLY.wYZoFf0GawLjvTDDHU3j4eU8VXbQYS6' WHERE correo = 'ximena.torres@outlook.com';

-- =================================================================================================
--          Update para la Tabla Usuarios (2 Admin)
-- =================================================================================================

UPDATE usuario SET nombre = 'Admin', apellido = 'General', telefono = '5599887766', area_interes = 'Bovino', estado = 'CDMX', contrasena = '$2a$12$DwGRtuKO1ZQkJy3UX69I4ekp6l4pt38C5qGa4G8s0is3aIfNZjtyS', rol = 'admin' WHERE correo = 'soporte_toro_forrajero@outlook.com';

UPDATE usuario SET nombre = 'Soporte', apellido = 'Sistema', telefono = '5500000000', area_interes = 'Bovino', estado = 'CDMX', contrasena = '$2a$12$uBManTSBkjl9z4/960wHgeStzVtUtaTcTJnx7eWuvfYhEBN2Zv0W6', rol = 'admin' WHERE correo = 'soporte_toro_forrajero@proton.me';

SET SQL_SAFE_UPDATES = 1;