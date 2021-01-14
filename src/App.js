// https://fontawesome.com/how-to-use/on-the-web/using-with/react

// npm install @material-ui/icons
// npm install @material-ui/core
// npm install @material-ui/lab

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
})

export default function HoverRating() {
  const [value, setValue] = React.useState(2)
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        // defaultValue={2.5} 
        value={value}
        precision={0.1}
        size="large"
        onChange={(event, newValue) => {setValue(newValue)}}
        onChangeActive={(event, newHover) => {setHover(newHover)}}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  )
}
