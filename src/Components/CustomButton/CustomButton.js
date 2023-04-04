import { Button } from '@mui/material'
import React from 'react'

function CustomButton({children,variant,icon,...ohterProps}) {
  return (
    <Button sx={{
      backgroundColor: '#6600cc'
    }} {...ohterProps} variant={variant}>
        {children}
        {icon && icon}

    </Button>
  )
}

export default CustomButton