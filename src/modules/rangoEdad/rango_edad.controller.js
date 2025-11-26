import RangoEdad from "./rango_edad.model.js";

//Devolver todos los rangos de edad
export function getRangosEdad(req,res){
  RangoEdad.find().then(rangos=>{
      return res.status(200).json({
        message:"Se obtuvo la lista de rangos de edad correctamente",
        status:200,
        data:rangos
      });
    })
    .catch(error=>{
      return res.status(500).json({
        status:500,
        error:error.message
      });
    });
}

//Crear un nuevo rango de edad
export function createRangoEdad(req,res){
  RangoEdad.create(req.body)
    .then(rango=>{
      return res.status(201).json({
        message:"Se ha creado un nuevo rango de edad correctamente",
        status:201,
        data:rango
      });
    })
    .catch(error=>{
      return res.status(400).json({
        message:"Error al crear el rango",
        status:400,
        error:error.message
      });
    });
}

//Obtener un rango de edad especifico por ID
export function getRangoEdadById(req,res){
  RangoEdad.findById(req.params.id)
    .then(rango => {
      if (!rango) {
        return res.status(404).json({
          status: 404,
          message: "Rango no encontrado"
        });
      }
      return res.status(200).json({
        status: 200,
        message: "Rango obtenido correctamente",
        data: rango
      });
    })
    .catch(error => {
      return res.status(500).json({
        status: 500,
        message: "Error al obtener el rango",
        error: error.message
      });
    });
}

//Actualizar un rango de edad
export function updateRangoEdad(req,res){
  RangoEdad.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(rango=>{
      return res.status(200).json({
        status:200,
        message:"Rango actualizado correctamente",
        data:rango
      });
    })
    .catch(error=>{
      return res.status(400).json({
        message:"Error al actualizar el rango",
        status:400,
        error:error.message
      });
    });
}

//Eliminar un rango de edad
export function deleteRangoEdad(req,res){
  RangoEdad.findByIdAndDelete(req.params.id).then(()=>{
      return res.status(200).json({
        message: "Se ha eliminado el rango de edad correctamente",
        status:200
      });
    })
    .catch(error=>{
      return res.status(400).json({
        message:"Error al eliminar el rango de edad",
        status:400,
        error:error.message
      });
    });
}

