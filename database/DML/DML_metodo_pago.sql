-- =================================================================================================
-- Script DML: Inserción de Métodos de Pago
-- Nota de seguridad: Los números de tarjeta se almacenan encriptados usando AES-128 en modo Hexadecimal
-- para evitar guardar datos sensibles en texto plano dentro de la BD.
-- =================================================================================================

INSERT INTO metodo_pago (num_tarjeta, fecha_expiracion, id_usuario) VALUES 
	(HEX(AES_ENCRYPT('8364506782364758', 'mi_clave_secreta')), '2028-06', 1),
	(HEX(AES_ENCRYPT('4152313485960123', 'mi_clave_secreta')), '2027-11', 2),
	(HEX(AES_ENCRYPT('5284910238475612', 'mi_clave_secreta')), '2029-08', 3),
	(HEX(AES_ENCRYPT('4916238471029384', 'mi_clave_secreta')), '2026-03', 4),
	(HEX(AES_ENCRYPT('5412983746501928', 'mi_clave_secreta')), '2028-12', 5),
	(HEX(AES_ENCRYPT('4026183940512837', 'mi_clave_secreta')), '2030-05', 6),
	(HEX(AES_ENCRYPT('5105293847162039', 'mi_clave_secreta')), '2027-09', 7),
	(HEX(AES_ENCRYPT('4532819023847162', 'mi_clave_secreta')), '2029-01', 8),
	(HEX(AES_ENCRYPT('5321894726103847', 'mi_clave_secreta')), '2028-07', 9),
	(HEX(AES_ENCRYPT('4820193847562910', 'mi_clave_secreta')), '2026-10', 10);



-- =================================================================================================
-- Consultas de verificación
-- =================================================================================================

-- 1. Consulta normal (Muestra el número de tarjeta encriptado/hexadecimal):
SELECT * FROM metodo_pago;

-- 2. Consulta desencriptada (Aplica UNHEX + AES_DECRYPT para recuperar la tarjeta original):
SELECT 
    id_metodo_pago,
    CAST(AES_DECRYPT(UNHEX(num_tarjeta), 'mi_clave_secreta') AS CHAR) AS tarjeta_original,
    fecha_expiracion,
    id_usuario
FROM metodo_pago;