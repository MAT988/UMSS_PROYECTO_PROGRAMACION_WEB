import { Router } from 'express';
import HealthRoutes from '../modules/health/health.routes.js';
import RangoEdadRoutes from '../modules/rangoEdad/rango_edad.routes.js';
import NivelDificultadRoutes from '../modules/nivel_dificultad/nivel_dificultad.routes.js';
import CategoriaRoutes from '../modules/categoria/categoria.routes.js';
import SubcategoriaRoutes from '../modules/subcategoria/subcategoria.routes.js';
import RolRoutes from '../modules/rol/rol.routes.js';
import AuthRoutes from '../modules/auth/auth.routes.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router=Router();

router.use('/api/auth',AuthRoutes);
router.use('/api',HealthRoutes);
router.use('/api/categorias',verifyToken,CategoriaRoutes);
router.use('/api/subcategorias',verifyToken,SubcategoriaRoutes);
router.use('/api/rangos-edad',verifyToken,RangoEdadRoutes);
router.use('/api/niveles-dificultad',verifyToken,NivelDificultadRoutes);
router.use('/api/rol',RolRoutes);

router.use((req, res)=>{
  console.log('Not found:',req.method,req.originalUrl);
  res.status(404).send({
    message:'route not found',
  });
});

export default router;
