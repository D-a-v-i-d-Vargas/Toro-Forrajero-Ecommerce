-- 1. Agregar la columna 'imagen' a la tabla productos (si no existe)
ALTER TABLE productos ADD COLUMN imagen VARCHAR(255);

-- 2. Actualizar las rutas exactas de las imágenes por producto

-- ====================================================
-- BOVINOS
-- ====================================================
UPDATE productos SET imagen = 'recursos-graficos/productos/bovino/bovino-adm-mezcla-nutridor.png' WHERE id_producto = 1;
UPDATE productos SET imagen = 'recursos-graficos/productos/bovino/bovino-adm-mezcla-ganadera-malta.png' WHERE id_producto = 2;
UPDATE productos SET imagen = 'recursos-graficos/productos/bovino/bovino-nogal-engorda.png' WHERE id_producto = 9;
UPDATE productos SET imagen = 'recursos-graficos/productos/bovino/bovino-nogal-concentrado-engorda.png' WHERE id_producto = 10;
UPDATE productos SET imagen = 'recursos-graficos/productos/bovino/bovino-aranda-engorda.png' WHERE id_producto = 17;
UPDATE productos SET imagen = 'recursos-graficos/productos/bovino/bovino-aranda-crecimiento.png' WHERE id_producto = 18;

-- ====================================================
-- AVES
-- ====================================================
UPDATE productos SET imagen = 'recursos-graficos/productos/aves/aves-adm-pollo-especial.png' WHERE id_producto = 3;
UPDATE productos SET imagen = 'recursos-graficos/productos/aves/aves-adm-pollo-nutridor.png' WHERE id_producto = 4;
UPDATE productos SET imagen = 'recursos-graficos/productos/aves/aves-nogal-fortipollo.png' WHERE id_producto = 11;
UPDATE productos SET imagen = 'recursos-graficos/productos/aves/aves-nogal-maxipollo.png' WHERE id_producto = 12;
UPDATE productos SET imagen = 'recursos-graficos/productos/aves/aves-aranda-inipollo.png' WHERE id_producto = 19;
UPDATE productos SET imagen = 'recursos-graficos/productos/aves/aves-aranda-sostenedor.png' WHERE id_producto = 20;

-- ====================================================
-- PORCINOS
-- ====================================================
UPDATE productos SET imagen = 'recursos-graficos/productos/porcino/porcino-adm-engorda.png' WHERE id_producto = 5;
UPDATE productos SET imagen = 'recursos-graficos/productos/porcino/porcino-adm-growpig.png' WHERE id_producto = 6;
UPDATE productos SET imagen = 'recursos-graficos/productos/porcino/porcino-nogal-engorda.png' WHERE id_producto = 13;
UPDATE productos SET imagen = 'recursos-graficos/productos/porcino/porcino-nogal-crecimiento.png' WHERE id_producto = 14;
UPDATE productos SET imagen = 'recursos-graficos/productos/porcino/porcino-aranda-crecicerdo.png' WHERE id_producto = 21;
UPDATE productos SET imagen = 'recursos-graficos/productos/porcino/porcino-aranda-destete.png' WHERE id_producto = 22;

-- ====================================================
-- OVINOS
-- ====================================================
UPDATE productos SET imagen = 'recursos-graficos/productos/ovino/ovino-adm-borrego-forte.png' WHERE id_producto = 7;
UPDATE productos SET imagen = 'recursos-graficos/productos/ovino/ovino-adm-borrego-ganador.png' WHERE id_producto = 8;
UPDATE productos SET imagen = 'recursos-graficos/productos/ovino/ovino-nogal-preiniciador.png' WHERE id_producto = 15;
UPDATE productos SET imagen = 'recursos-graficos/productos/ovino/ovino-nogal-engorda.png' WHERE id_producto = 16;
UPDATE productos SET imagen = 'recursos-graficos/productos/ovino/ovino-borrego-engorda.png' WHERE id_producto = 23;
UPDATE productos SET imagen = 'recursos-graficos/productos/ovino/ovino-borrego-iniciador.png' WHERE id_producto = 24;

-- 3. Confirmación de cambios
SELECT id_producto, nombre, imagen FROM productos;