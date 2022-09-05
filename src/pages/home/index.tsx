import { v4 as uuidv4 } from "uuid"

import { Grid, Paper } from "@mui/material"

import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import LayoutContainer from "../../components/layoutContainer"

import { getDatabase, ref, get, child, set } from "firebase/database";
import { Box } from "@mui/system"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from "react-chartjs-2"
import ResumeDash from "../../components/resumeDash"


export default function Home() {


  const db = getDatabase()

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Numero de vendas',
      },
    }
  }

  const labels = ['Janeiro', 'Favereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho']

  const data = {
    labels,
    datasets: [
      {
        label: 'Loja Matriz',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Loja Filial',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  /*const readDataDB = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "clientes/4efb2b05-1314-4cc0-918c-9fc674d5ea8a"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        console.log(data)
      } else {
        console.log("Nenhum dado disponivel!")
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const insertDataDB = (cnpj: string, datacadastro: string, razaosocial: string) => {
    const clientId = uuidv4()
    set(ref(db, `clientes/${clientId}`), {
      cnpj: cnpj,
      datacadastro: datacadastro,
      razaosocial: razaosocial
    })
  }

  //insertDataDB("456", Date.now().toString(), "Cliente do code")

  readDataDB()*/
  
 

  return (
    <>
      <Sidebar />      
      <Navbar />

      <LayoutContainer>

        <ResumeDash />
      
        <Grid item xs={1}>
          <Box width={700}>
            <Paper elevation={1}><Bar options={options} data={data} /></Paper>
          </Box>
        </Grid> 
      
      </LayoutContainer>

    </>
  )
}
