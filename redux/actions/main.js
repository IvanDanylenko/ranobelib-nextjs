import * as t from "@/redux/types"

export const setInfo = (name) => ({
  type: t.SET_NAME,
  payload: name,
})
