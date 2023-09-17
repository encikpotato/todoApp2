import { atom } from "jotai"
import { atomWithStorage } from 'jotai/utils'

export const dataList = atom([
    {
        id: 0,
        todo: 'Wash Car'
    },
    {
        id: 1,
        todo: 'Finish Homework'
    },
    {
        id: 2,
        todo: 'Close aircond'
    },
])