import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"

const Cards = ({ items, hideLastItemOnMobile = false }) => {
  return (
    <div className="container">
      <div className="flex-1 flex-col flex-wrap place-items-auto">
        {items.map(item => (
          <div
            className={classNames("mx-auto sm:w-1/2 lg:w-2/3 p-3 ", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
            key={item.id}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
