export const example = (contents) => (
  (dispatch, getState) => {
    dispatch({ type: 'EXAMPLE', payload: contents })
  }
)
