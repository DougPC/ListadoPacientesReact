import { useState,useEffect} from 'react'
import Error from './Error'


// eslint-disable-next-line react/prop-types
const Fomulario = ({setPacientes,pacientes,paciente}) => {


  const [nombre,setNombre] = useState("")
  const [propietario,setPropietario] = useState("")
  const [email,setEmail] = useState("")
  const [alta,setAlta] = useState("")
  const [sintomas,setSintomas] = useState("")
  const [error,setError] = useState(false)

 
  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
   },[paciente])



//Generador de Id

const generarId=()=>{
  const randon = Math.random().toString(36).substr(2)
  const fecha = Date.now().toString(36)
  return randon+fecha
}


  const handleSubmit=(e)=>{
    e.preventDefault()
  
    //Validacion de formulario
    if([nombre,propietario,email,alta,sintomas].includes('')){
     setError(true)
      return;
    }else{
      setError(false)




      //Objeto de Paciente
      const objetoPaciente={
        
        nombre,
        propietario,
        email,
        alta,
        sintomas
       

      }

      if(paciente.id){
          //Editando el registro
          objetoPaciente.id = generarId()

          const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
            paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            //setPaciente({})

      }else{
        //Nuevo Registro
        objetoPaciente.id = generarId()
        setPacientes([...pacientes,objetoPaciente])

      }


      //Reinicio de Form
      setNombre('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')


    }

  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center ">Seguimiento Pacientes</h2>
        
        <p className="mt-5 text-center mb-12 pb-1">
          Añade Pacientes y {" "}
          <span className="text-indigo-600 font-bold text-lg">Administralos </span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
          
          {error && <Error><p> Todos los campo deben ser obligatorios</p> </Error>   }
         
         <div className="mb-5">
            <label htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold" >Nombre Mascota</label>
            <input 
            id="mascota"
            className="border rounded-md w-full p-2 mt-2 placeholder-gray-400"
              type="text"
              placeholder="Nombre de la mascota"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">Nombre del Propietaro</label>
            <input 
            id="propietario"
            className="border rounded-md w-full p-2 mt-2 placeholder-gray-400"
              type="text"
              placeholder="Nombre del Propietaro"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)}
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="email"
            className="block text-gray-700 uppercase font-bold">Email</label>
            <input 
            id="email"
            className="border rounded-md w-full p-2 mt-2 placeholder-gray-400"
              type="text"
              placeholder="Email Contacto Propietario"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="alta"
            className="block text-gray-700 uppercase font-bold" >Alta</label>
            <input 
            id="alta"
            className="border rounded-md w-full p-2 mt-2 placeholder-gray-400"
              type="date"
              value={alta}
              onChange={ (e) => setAlta(e.target.value)}
             />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold" >
              Sintomas
              </label>
              <textarea  id="sintomas" className="border p-2 mt-2 rounded-md w-full" 
              placeholder="Describe los sintomas" 
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value)}
              />
             
            </div>

            <input 
             className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
             hover:bg-indigo-500 cursor-pointer transition-all"
             value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
             type="submit"
             />

        </form>
    </div>
  )
}

export default Fomulario

