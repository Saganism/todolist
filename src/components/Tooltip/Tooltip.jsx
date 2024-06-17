import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip';

const MyTooltip = ({content, children}) => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className='p-2 bg-amber-400 text-white max-w-96'>
            {content}
          <Tooltip.Arrow className='block fill-orange-300'/>
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  )
}

export default MyTooltip
