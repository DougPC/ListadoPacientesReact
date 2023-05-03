import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
    
console.log(pacientes) 




    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y:auto ">

            {pacientes && pacientes.length?(
             <>    
                 <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
                  <p className="mt-5 text-center mb-10">
                     Administra tus {" "}
                     <span className="text-indigo-600 font-bold text-lg">Pacientes y Citas</span> 
                  </p>
              <div className="md:h-screen overflow-y-scroll ">
               
              {pacientes.map( paciente => (
                     
                     <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}

                     />
      
              ))}
              </div>
              </>

                
            ):(
                <>
                
                <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
                  <p className="mt-5 text-center mb-10">
                    Comienza agregando pacientes {" "}
                     <span className="text-indigo-600 font-bold text-lg">y apareceran en este lugar</span> 
                  </p>
                
                </>


            )}
            
          
        
        </div>
    );
}

export default ListadoPacientes;
