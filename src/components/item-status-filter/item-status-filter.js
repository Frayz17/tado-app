import React from 'react'

import './item-status-filter.css'

const ItemStatusFilter = ({ handleFilterBtn, filterBtn }) => {
  const btnActive = 'btn btn-info'
  const btnNotActive = 'btn btn-outline-secondary'

  return (
    <div className='btn-group'>
      <button
        onClick={() => handleFilterBtn('all')}
        type='button'
        className={filterBtn === 'all' ? btnActive : btnNotActive}
      >All
      </button>
      <button
        onClick={() => handleFilterBtn('active')}
        type='button'
        className={filterBtn === 'active' ? btnActive : btnNotActive}
      >Active
      </button>
      <button
        onClick={() => handleFilterBtn('done')}
        type='button'
        className={filterBtn === 'done' ? btnActive : btnNotActive}
      >Done
      </button>
    </div>
  )
}

export default ItemStatusFilter
