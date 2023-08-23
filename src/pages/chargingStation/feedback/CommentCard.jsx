import { Box, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import angreeIcon from "../../../assets/Icons/emoji/u_anger.svg"
import satisfiedIcon from "../../../assets/Icons/emoji/u_smile-beam.svg"
import moment from 'moment'
const CommentCard = ({ data }) => {
  return (
    <Box className="Card_div comment_div" sx={{ padding: "0rem 1rem", paddingBottom: "1rem" }} >
      {
        data?.map(item => {
          const createdAt = moment(item?.created_at).format('DD MMMM YYYY')
          return (
            <Stack className='comment_container' key={item?.id}>
              <Stack className="comment">
                <Stack direction="row" gap="0.5rem" alignItems="center">
                  {
                   (item?.rate === 1 || item?.rate === 2 || item?.rate === 3) ?

                     (
                      <img src={item?.rate == 1 && satisfiedIcon ||
                        item?.rate == 2 && angreeIcon ||
                        item?.rate == 3 && 'okIcon'
                      } alt="satisfied" width={"24px"}
                        height={"24px"}
                        sx={{ objectFit: "fill" }} />
                     )
                      :
                      <>{item?.rate} sending Invalid rate</>
                  }
                  {/* <Typography variant='h5' component={"h5"}  >
                    Daiana Rotchen
                  </Typography> */}
                </Stack>
                <Typography variant='body2' >
                  {createdAt}
                </Typography>
              </Stack>
              <Box sx={{ paddingTop: "0.5rem" }}>
                <Typography variant='body1' >
                  {item?.feedback}
                </Typography>
              </Box>
            </Stack>
          )
        })

      }


    </Box>
  )
}

export default CommentCard