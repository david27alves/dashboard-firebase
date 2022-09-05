import { v4 as uuidv4 } from "uuid"

import { Avatar, Grid, Paper, Typography } from "@mui/material"

import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import LayoutContainer from "../../components/layoutContainer"

import { getDatabase, ref, get, child, set } from "firebase/database";
import { Box, useTheme } from "@mui/system"
import { styled } from '@mui/material/styles'

import MoneyIcon from "@mui/icons-material/Money"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"

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

const ItemPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  fontWeight: 'bold'
}))

const TypTitle = styled('h5')(({ theme }) => ({
  ...theme.typography.button,
  color: '#65748B',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.5px',
  lineHeight: 2.5,
  textTransform: 'uppercase'
}))

const TypInfo = styled(Typography)(({ theme }) => ({
  color: '#121828',
  fontWeight: 700,
  fontSize: '2rem'
}))

export default function Home() {

  const theme = useTheme()

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
        <Grid container spacing={2} >
          <Grid item xs={3}>
              <ItemPaper elevation={1}>
                <Grid container spacing={4}>
                  <Grid item>
                    <TypTitle>RECEITA</TypTitle>
                    <TypInfo>R$24k</TypInfo>
                    </Grid>
                    <Grid item>
                      <Avatar sx={{ bgcolor: '#D14343', width: 56, height: 56 }}><MoneyIcon /></Avatar>
                    </Grid>
                  </Grid>
              </ItemPaper>
          </Grid>
          <Grid item xs={3}>
            <ItemPaper elevation={1}>
              <Grid container spacing={4}>
                  <Grid item>
                    <TypTitle>TOTAL DE CLIENTES</TypTitle>
                    <TypInfo>1,6K</TypInfo>
                  </Grid>
                  <Grid item>
                    <Avatar sx={{ bgcolor: '#14B8A6', width: 56, height: 56 }}><PeopleOutlinedIcon /></Avatar>
                  </Grid>
              </Grid>
            </ItemPaper>
          </Grid>

          <Grid item xs={3}>
            <ItemPaper elevation={1}>
              <Grid container spacing={4}>
                <Grid item>
                  <TypTitle>PROGRESSO DA META</TypTitle>
                  <TypInfo>75.5%</TypInfo>
                </Grid>
                <Grid item>
                  <Avatar sx={{ bgcolor: '#FFB020', width: 56, height: 56 }}><InsertChartOutlinedIcon /></Avatar>
                </Grid>
              </Grid>
            </ItemPaper>
          </Grid>
          <Grid item xs={3}>
            <ItemPaper elevation={1}>
              <Grid container spacing={4}>
                <Grid item>
                  <TypTitle>LUCRO</TypTitle>
                  <TypInfo>R$23K</TypInfo>
                </Grid>
                <Grid item>
                  <Avatar sx={{ bgcolor: '#5048E5', width: 56, height: 56 }}><AttachMoneyIcon /></Avatar>
                </Grid>
              </Grid>
            </ItemPaper>
          </Grid>
        </Grid>
      
          <Grid item xs={1}>
            <Box width={700}>
              <Paper elevation={1}><Bar options={options} data={data} /></Paper>
            </Box>
          </Grid>    
      
      </LayoutContainer>

    </>
  )
}
