import { Router } from 'express';
import HealthRoutes from '../modules/health/health.routes.js';
import RangoEdadRoutes from '../modules/rangoEdad/rango_edad.routes.js';
import NivelDificultadRoutes from '../modules/nivel_dificultad/nivel_dificultad.routes.js';
const router = Router();
router.use('/api', HealthRoutes);

router.use((req, res) => {
  console.log('Not found:', req.method, req.originalUrl);
  res.status(404).send({
    message: 'route not found',
  });
});
router.use('/api/rangos-edad', RangoEdadRoutes);
router.use('/api/niveles-dificultad', NivelDificultadRoutes);
export default router;
