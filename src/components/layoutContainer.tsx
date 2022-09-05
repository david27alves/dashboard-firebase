
import { Box } from "@mui/material";
import { useTheme } from "@mui/system";



export default function LayoutContainer(props: any) {

    const theme = useTheme()

    return(<Box marginLeft={theme.spacing(35)} marginTop={theme.spacing(20)}>{ props.children }</Box>)
}