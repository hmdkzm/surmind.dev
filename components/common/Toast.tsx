'use client'
import { selectToast } from '@/lib/store/toastSlice'
import { useStore } from '@/provider/storeProvider'
import { Alert, IconButton, Snackbar, Stack } from '@mui/material'
import Slide, { SlideProps } from '@mui/material/Slide'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import CloseOutlined from '@mui/icons-material/CloseOutlined'
import { styleType } from '@/utils/types'

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />
}

export default function Toast() {
  const {
    open,
    duration,
    type,
    severity,
    message,
    vertical,
    horizontal,
    confirm,
    resolve,
    showToast,
  } = useStore(selectToast)
  const handleClose = () => {
    showToast(false)
    resolve?.(false)
  }
  const handleOk = () => {
    showToast(false)
    resolve?.(true)
  }
  const actions = (
    <Stack direction="row">
      <IconButton onClick={handleClose} size="small">
        <CloseOutlined fontSize="small" color="success" />
      </IconButton>
      <IconButton onClick={handleOk} size="small">
        <CheckOutlined fontSize="small" color="success" />
      </IconButton>
    </Stack>
  )
  const style: styleType = {
    snackbar: {
      backgroundImage: 'unset',
      backgroundColor: 'background.paper',
      color: 'text.primary',
      border: '1px solid',
      borderColor: 'secondary.main',
    },
    alert: {
      width: '100%',
      border: '1px solid',
      borderColor: 'secondary.main',
    },
  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={!confirm ? duration : null}
        onClose={handleClose}
        slots={{ transition: SlideTransition }}
        message={message}
        action={confirm && actions}
        slotProps={{
          content: {
            sx: style.snackbar,
          },
        }}
      >
        {type === 'alert' ? (
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={style.alert}
            action={confirm ? actions : undefined}
          >
            {message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </>
  )
}
