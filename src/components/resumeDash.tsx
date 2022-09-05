import { useState } from "react"

import { Avatar, Grid, Paper, Skeleton, Typography } from "@mui/material"

import MoneyIcon from "@mui/icons-material/Money"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"

import { styled } from "@mui/material/styles"

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

  
export default function ResumeDash() {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)

    return (

        <>
        <Grid container spacing={2} >
          <Grid item xs={3}>
              <ItemPaper elevation={1}>
                <Grid container spacing={4}>
                  <Grid item>
                    {
                      loading ? (
                        <Skeleton>
                          <TypTitle>RECEITA</TypTitle>
                          <TypInfo>R$24k</TypInfo>
                        </Skeleton>
                      ) : (
                        <>
                          <TypTitle>RECEITA</TypTitle>
                          <TypInfo>R$24k</TypInfo>
                        </>
                      )
                    }
                    
                    </Grid>
                    <Grid item>
                      {
                        loading ? (
                          <Skeleton>
                            <Avatar sx={{ width: 56, height: 56 }}>T</Avatar>
                          </Skeleton>
                        ) : (
                          <Avatar sx={{ bgcolor: '#D14343', width: 56, height: 56 }}><MoneyIcon /></Avatar>
                        )
                      }
                    </Grid>
                  </Grid>
              </ItemPaper>
          </Grid>
          <Grid item xs={3}>
            <ItemPaper elevation={1}>
              <Grid container spacing={4}>
                  <Grid item>
                    {
                      loading ? (
                        <Skeleton>
                          <TypTitle>TOTAL DE CLIENTES</TypTitle>
                          <TypInfo>1,6k</TypInfo>
                        </Skeleton>
                      ) : (
                        <>
                          <TypTitle>TOTAL DE CLIENTES</TypTitle>
                          <TypInfo>1,6k</TypInfo>
                        </>
                      )
                    }
                  </Grid>
                  <Grid item>
                    {
                      loading ? (
                        <Skeleton>
                          <Avatar sx={{ width: 56, height: 56 }}>T</Avatar>
                        </Skeleton>
                      ) : (
                        <Avatar sx={{ bgcolor: '#14B8A6', width: 56, height: 56 }}><PeopleOutlinedIcon /></Avatar>
                      )
                    }
                  </Grid>
              </Grid>
            </ItemPaper>
          </Grid>

          <Grid item xs={3}>
            <ItemPaper elevation={1}>
              <Grid container spacing={4}>
                <Grid item>
                    {
                        loading ? (
                            <Skeleton>
                                <TypTitle>PROGRESSO DA META</TypTitle>
                                <TypInfo>75.5%</TypInfo>
                            </Skeleton>
                        ) : (
                            <>
                                <TypTitle>PROGRESSO DA META</TypTitle>
                                <TypInfo>75.5%</TypInfo>
                            </>
                        )
                    }
                </Grid>
                <Grid item>
                    {
                        loading ? (
                            <Skeleton>
                                <Avatar sx={{ width: 56, height: 56 }}>T</Avatar>
                            </Skeleton>
                        ) : (
                            <Avatar sx={{ bgcolor: '#FFB020', width: 56, height: 56 }}><InsertChartOutlinedIcon /></Avatar>
                        )
                    }
                  
                </Grid>
              </Grid>
            </ItemPaper>
          </Grid>
          <Grid item xs={3}>
            <ItemPaper elevation={1}>
              <Grid container spacing={4}>
                <Grid item>
                    {
                        loading ? (
                            <Skeleton>
                                <TypTitle>LUCRO</TypTitle>
                                <TypInfo>R$23k</TypInfo>
                            </Skeleton>
                        ) : (
                            <>
                                <TypTitle>LUCRO</TypTitle>
                                <TypInfo>R$23k</TypInfo>
                            </>
                        )
                    }
                </Grid>
                <Grid item>
                    {
                        loading ? (
                            <Skeleton>
                                <Avatar sx={{ width: 56, height: 56 }} />
                            </Skeleton>
                        ) : (
                            <Avatar sx={{ bgcolor: '#5048E5', width: 56, height: 56 }}><AttachMoneyIcon /></Avatar>
                        )
                    }
                </Grid>
              </Grid>
            </ItemPaper>
          </Grid>
        </Grid>
        
        </>

    )

}