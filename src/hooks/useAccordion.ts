import { useCallback } from 'react';
import { useBundle } from './useBundle';

export function useAccordion() {
  const { state, dispatch } = useBundle();
  const setActiveStep = useCallback((step: number) => dispatch({ type: 'SET_ACTIVE_STEP', payload: step }), [dispatch]);
  const goNext = useCallback(() => setActiveStep(state.activeStep + 1), [setActiveStep, state.activeStep]);
  return { activeStep: state.activeStep, setActiveStep, goNext };
}
