import React from 'react'
import { Categories } from './Categories'
import { SwiperWrapper } from './SwiperWrapper'

export const Books:React.FC = () => {
  return (
    <React.Fragment>
        <Categories/>
        <SwiperWrapper/>
    </React.Fragment>
  )
}
