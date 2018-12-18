import React from 'react'
import PropTypes from 'prop-types'

const Columns = ({ data = [] }) => (
  <div className="columns">
    {data && data.map(column => (
      <div key={column.title} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {column.title}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            {column.big}
          </h2>
          <p className="has-text-weight-semibold">{column.description}</p>
          <ul>
            {column.items && column.items.map(item => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Columns.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      bog: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Columns
