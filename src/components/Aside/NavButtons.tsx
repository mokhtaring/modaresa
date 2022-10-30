import classNames from 'classnames'
import { useMemo } from 'react'
import { useStateContext } from '../../context/StateContext'
import { INavButtons } from '../../core/types'

export default function NavButtons({ item }: INavButtons) {
  const { selected, setSelected } = useStateContext()

  const renderItems = useMemo(() => {
    return item.map((item) => (
      <span
          id={item.name}
        key={item.name}
        className={classNames(
          'group mt-2 flex w-full cursor-pointer items-center justify-start gap-x-3 rounded-lg p-3 transition-colors hover:bg-navHover',
          item.name === selected.name && 'bg-navHover'
        )}
        onClick={() => {
          setSelected(item)
        }}
      >
        <div style={{ minWidth: '26px' }} className="flex items-center">
            {item.icon}
        </div>
        <a href={item.href} className={'menu-hide'}>
          <small className="font-medium">{item.name}</small>
        </a>
      </span>
    ))
  }, [item, selected, setSelected])

  return <>{renderItems}</>
}
