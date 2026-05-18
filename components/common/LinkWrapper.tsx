'use client'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'

export default function LinkWrapper({
  children,
  link,
  ...props
}: {
  children?: React.ReactNode
  link: string
  [props: string]: unknown
}) {
  return (
    <MuiLink href={link} component={Link} {...props}>
      {children}
    </MuiLink>
  )
}
