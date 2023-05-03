import Header from "./components/Header"
import Fomulario from "./components/Fomulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState,useEffect } from "react"


function App() {

  const [pacientes,setPacientes]= useState([])
  const [paciente,setPaciente]=useState({})


  useEffect(()=>{

    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
     setPacientes(pacientesLS)
    }
    obtenerLS()
  },[])
  
  useEffect( ()=>{
      localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes] )


  const eliminarPaciente = (id) =>{
   //console.log("Eliminar paciente", id);
   const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id )
   //console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12  md:flex">
      
      <Fomulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      
      />
      
     < ListadoPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
     />
      </div>
     
    </div>
  ) 
}

export default App
