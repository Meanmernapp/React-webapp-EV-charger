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
        <Stack sx={{ padding: "1rem" }}>
            <SearchField value={searchValue} onChange={handleSearchChange} />
            <Box sx={{ paddingTop: "1rem" }}>
                {/* <SelectField
                    value={eSource}
                    icon={ESourceIcon}
                    placeholder="E Source"
                    onChange={(e) => setESource(e.target.value)} /> */}
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

                {/* <SelectField
                    value={hpCharger}
                    icon={ESourceIcon}
                    placeholder="Hp Charger"
                    onChange={(e) => setHpCharger(e.target.value)} /> */}

                <Box>
                    <ResulabAccordion
                        title={"Hp Charger"}
                        icon={ESourceIcon}
                        count={"3"}
                    />
                </Box>
                <Box sx={{ paddingTop: "1rem" }}>

                    {/* <SelectField

                        value={ePack}
                        icon={EPackIcon}
                        placeholder="E Packs"
                        onChange={(e) => setEpack(e.target.value)} /> */}
                    <ResulabAccordion
                        title={"E Packs"}
                        icon={EPackIcon}

                    />
                </Box>

            </Box>
            {/* <br />
            h charger
            <br />
            epack
            <br />
            location */}
        </Stack>
    )
}

export default SideBarMap