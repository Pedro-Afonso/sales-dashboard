import { createPortal } from 'react-dom'
import { FC, ReactNode } from 'react'

import { UnknownPortalException } from '@/utils'

export enum EPortalLocation {
  SIDEBAR = 'portal-sidebar-root'
}

interface IPortalProps {
  portalLocation: EPortalLocation
  wrapper: ReactNode
}

export const Portal: FC<IPortalProps> = ({ portalLocation, wrapper }) => {
  const rootElement = document.getElementById(portalLocation)

  if (rootElement) {
    return createPortal(wrapper, rootElement)
  } else {
    throw new UnknownPortalException(
      `Can't locate DOM node "${portalLocation}". Make sure it is defined in index.html.`
    )
  }
}
