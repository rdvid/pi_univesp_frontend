import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from 'react-router-dom';

function Layout(){
    return (
        
        <Grid templateAreas={`"header" "main"`}
            gridTemplateRows={'10% 1fr'} h='100vh' fontWeight='bold'>

            <GridItem area={'header'} >
                <Header />
            </GridItem>

            <GridItem area={'main'} borderTop={'1px'} borderColor={'#C8CBD9'}>
                <section className='flex flex-row bg-[#C8CBD9]'>
                    <Sidebar />
                    <Outlet />
                </section>
            </GridItem>
        
        </Grid>
    
  )
}

export default Layout;