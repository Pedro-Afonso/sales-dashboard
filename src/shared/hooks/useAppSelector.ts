import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@/shared/config/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
