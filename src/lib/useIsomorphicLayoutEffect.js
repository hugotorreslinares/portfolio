import { useEffect, useLayoutEffect } from 'react'

// useLayoutEffect warns during server rendering; use useEffect there (effects never run on the server).
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
