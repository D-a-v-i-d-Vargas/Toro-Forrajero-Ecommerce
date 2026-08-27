-- =================================================================================================
-- Script DML: Inserción de Métodos de Pago
-- Nota de seguridad: Los números de tarjeta se almacenan encriptados usando AES-128 en modo Hexadecimal
-- para evitar guardar datos sensibles en texto plano dentro de la BD.
-- =================================================================================================

INSERT INTO metodo_pago (num_tarjeta, fecha_expiracion, id_usuario) VALUES 
	('0kr5q9Kv/D4RF449rzYvsNNpL0i26ypcNQCM1doKjWI=', '06/2028', 1),
	('S0a2Hm+kgTeHApTBUwB+z9NpL0i26ypcNQCM1doKjWI=', '11/2027', 2),
	('iKKPWwa8ClrxlwEL2eUfPdNpL0i26ypcNQCM1doKjWI=', '08/2029', 3),
	('MSkkvqJ/H52jH+eInQ8umtNpL0i26ypcNQCM1doKjWI=', '03/2026', 4),
	('nk39UB4UqgoF45/FjuVPmdNpL0i26ypcNQCM1doKjWI=', '12/2028', 5),
	('xqngSDhDTj1feddZTIV/sdNpL0i26ypcNQCM1doKjWI=', '05/2030', 6),
	('iKKPWwa8ClrxlwEL2eUfPdNpL0i26ypcNQCM1doKjWI=', '09/2027', 7),
	('0kr5q9Kv/D4RF449rzYvsNNpL0i26ypcNQCM1doKjWI=', '01/2029', 8),
	('MSkkvqJ/H52jH+eInQ8umtNpL0i26ypcNQCM1doKjWI=', '07/2028', 9),
	('xqngSDhDTj1feddZTIV/sdNpL0i26ypcNQCM1doKjWI=', '10/2026', 10);


-- Actualización de las tarjetas
UPDATE metodo_pago 
SET num_tarjeta = CASE id_metodo_pago
    WHEN 1 THEN '0kr5q9Kv/D4RF449rzYvsNNpL0i26ypcNQCM1doKjWI='
    WHEN 2 THEN 'S0a2Hm+kgTeHApTBUwB+z9NpL0i26ypcNQCM1doKjWI='
    WHEN 3 THEN 'iKKPWwa8ClrxlwEL2eUfPdNpL0i26ypcNQCM1doKjWI='
    WHEN 4 THEN 'MSkkvqJ/H52jH+eInQ8umtNpL0i26ypcNQCM1doKjWI='
    WHEN 5 THEN 'nk39UB4UqgoF45/FjuVPmdNpL0i26ypcNQCM1doKjWI='
    WHEN 6 THEN 'xqngSDhDTj1feddZTIV/sdNpL0i26ypcNQCM1doKjWI='
    WHEN 7 THEN 'iKKPWwa8ClrxlwEL2eUfPdNpL0i26ypcNQCM1doKjWI='
    WHEN 8 THEN '0kr5q9Kv/D4RF449rzYvsNNpL0i26ypcNQCM1doKjWI='
    WHEN 9 THEN 'MSkkvqJ/H52jH+eInQ8umtNpL0i26ypcNQCM1doKjWI='
    WHEN 10 THEN 'xqngSDhDTj1feddZTIV/sdNpL0i26ypcNQCM1doKjWI='
END
WHERE id_metodo_pago BETWEEN 1 AND 10;

-- =================================================================================================
-- Consultas de verificación
-- =================================================================================================

-- 1. Consulta normal (Muestra el número de tarjeta encriptado):
SELECT * FROM metodo_pago;
