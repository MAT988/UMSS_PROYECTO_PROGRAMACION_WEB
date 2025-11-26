import NivelDificultad from "./nivel_dificultad.model.js";

// Devolver todos los niveles de dificultad
export function getNivelesDificultad(req,res){
  NivelDificultad.find().then(niveles=>{
      return res.status(200).json({
        message:"Se obtuvo la lista de niveles de dificultad correctamente",
        status:200,
        data:niveles
      });
    })
    .catch(error=>{
      return res.status(500).json({
        status:500,
        error:error.message
      });
    });
}

// Crear un nuevo nivel de dificultad
export function createNivelDificultad(req,res){
  NivelDificultad.create(req.body).then(nivel=>{
        return res.status(201).json({
        message:"Se ha creado el nivel de dificultad correctamente",
        status:201,
        data:nivel
      });
    })
    .catch(error=>{
      return res.status(400).json({
        message:"Error al crear el nivel de dificultad",
        status:400,
        error:error.message
      });
    });
}

// Obtener un nivel de dificultad especifico por ID
export function getNivelDificultadById(req,res){
  NivelDificultad.findById(req.params.id).then(nivel=>{
      return res.status(200).json({
        message:"Nivel de dificultad obtenido correctamente",
        status:200,
        data:nivel
      });
    })
    .catch(error=>{
      return res.status(400).json({
        message:"Error al obtener el nivel de dificultad",
        status:400,
        error:error.message
      });
    });
}


// Actualizar un nivel de dificultad
export function updateNivelDificultad(req,res){
  NivelDificultad.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(nivel=>{
      return res.status(200).json({
        message:"Se ha actualizado el nivel de dificultad correctamente",
        status:200,
        data:nivel
      });
    })
    .catch(error=>{
      return res.status(400).json({
        message:"Error al actualizar el nivel de dificultad",
        status:400,
        error:error.message
      });
    });
}

// Eliminar un nivel de dificultad
export function deleteNivelDificultad(req,res){
  NivelDificultad.findByIdAndDelete(req.params.id).then(()=>{
      return res.status(200).json({
        message:"Se ha eliminado el nivel de dificultad correctamente",
        status: 200
      });
    })
    .catch(error=>{
      return res.status(400).json({
        message:"Error al eliminar el nivel de dificultad",
        status:400,
        error:error.message
      });
    });
}
