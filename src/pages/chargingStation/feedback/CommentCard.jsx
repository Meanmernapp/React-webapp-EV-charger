import { Box, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import angreeIcon from "../../../assets/Icons/emoji/u_anger.svg"
import satisfiedIcon from "../../../assets/Icons/emoji/u_smile-beam.svg"
const CommentCard = () => {
  return (
    <Box className="Card_div comment_div" sx={{ padding: "0rem 1rem", paddingBottom:"1rem" }} >
      <Stack className='comment_container'>
        <Stack className="comment">
          <Stack direction="row" gap="0.5rem" alignItems="center">
            <img src={satisfiedIcon} alt="satisfied" width={"24px"}
              height={"24px"}
              sx={{ objectFit: "fill" }} />
            <Typography variant='h5' component={"h5"}  >
              Daiana Rotchen
            </Typography>
          </Stack>
          <Typography variant='body2' >
            14 May 2021
          </Typography>
        </Stack>
        <Box sx={{ paddingTop: "0.5rem" }}>
          <Typography variant='body1' >
            Best charging station  I have ever seen. Great design and customer service! I am definitely coming back for more energy every time I am in this area.
          </Typography>
        </Box>
      </Stack>
      <Stack className='comment_container'>
        <Stack className="comment">
          <Stack direction="row" gap="0.5rem" alignItems="center">
            <img src={angreeIcon} alt="satisfied" width={"24px"}
              height={"24px"}
              sx={{ objectFit: "fill" }} />
            <Typography variant='h5' component={"h5"}  >
              Sheraz
            </Typography>
          </Stack>
          <Typography variant='body2'  >
            14 May 2021
          </Typography>
        </Stack>
        <Box sx={{ paddingTop: "0.5rem" }}>
          <Typography variant='body1' >
            Surviving...
          </Typography>
        </Box>
      </Stack>
      <Stack className='comment_container'>
        <Stack className="comment">
          <Stack direction="row" gap="0.5rem" alignItems="center">
            <img src={satisfiedIcon} alt="satisfied" width={"24px"}
              height={"24px"}
              sx={{ objectFit: "fill" }} />
            <Typography variant='h5' component={"h5"}  >
              Daiana Rotchen
            </Typography>
          </Stack>
          <Typography variant='body2' >
            14 May 2021
          </Typography>
        </Stack>
        <Box sx={{ paddingTop: "0.5rem" }}>
          <Typography variant='body1' >
            Best charging station  I have ever seen. Great design and customer service! I am definitely coming back for more energy every time I am in this area.
          </Typography>
        </Box>
      </Stack>
      <Stack className='comment_container'>
        <Stack className="comment">
          <Stack direction="row" gap="0.5rem" alignItems="center">
            <img src={satisfiedIcon} alt="satisfied" width={"24px"}
              height={"24px"}
              sx={{ objectFit: "fill" }} />
            <Typography variant='h5' component={"h5"}  >
              Daiana Rotchen
            </Typography>
          </Stack>
          <Typography variant='body2'  >
            14 May 2021
          </Typography>
        </Stack>
        <Box sx={{ paddingTop: "0.5rem" }}>
          <Typography variant='body1' >
            Best charging station  I have ever seen. Great design and customer service! I am definitely coming back for more energy every time I am in this area.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default CommentCard