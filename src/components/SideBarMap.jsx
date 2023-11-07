import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchField from './SearchField'
import SelectField from './SelectField';
import ESourceIcon from '../assets/map-view/esource.svg'
import EPackIcon from '../assets/map-view/epack.svg'
import zIndex from '@mui/material/styles/zIndex';
import ResulabAccordion from '../pages/mapView/component/ResulabAccordion';
const SideBarMap = () => {
    const [searchValue, setSearchValue] = useState('');
    const [eSource, setESource] = useState("")
    const [hpCharger, setHpCharger] = useState("")
    const [ePack, setEpack] = useState("")

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        // Handle your search logic here
    };
    return (
        <Stack sx={{ padding: "1rem" , marginTop:"1rem"}}>
            <SearchField value={searchValue} onChange={handleSearchChange} />
            <Box sx={{ paddingTop: "1rem" }}>
                <ResulabAccordion
                    title={"E Source"}
                    icon={ESourceIcon}
                    count={"3"}
                />
            </Box>
            <Box sx={{ paddingTop: "1rem" }}>
                <Typography sx={{ paddingBottom: "0.5rem" }}>
                    Device
                </Typography>
                <Box>
                    <ResulabAccordion
                        title={"Hp Charger"}
                        icon={ESourceIcon}
                        count={"3"}
                    />
                </Box>
                <Box sx={{ paddingTop: "1rem" }}>
                    <ResulabAccordion
                        title={"E Packs"}
                        icon={EPackIcon}
                    />
                </Box>
            </Box>
        </Stack>
    )
}

export default SideBarMap