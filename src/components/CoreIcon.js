/**
 * Created by daniel on 5/8/16.
 */
import React from 'react';

class CoreIcon extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.className = props.className;
    this.icon = props.icon;
  }

  render() {
    const styles = {
      svg: {
        'display': 'block'
      }
    };

    return (
      <core-icon class={this.className} icon={this.name} aria-label={this.name} role="img">
        <svg viewBox="0 0 256 256" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" className="fit" style={styles.svg}>
          <g>
            {this.icon}
          </g>
        </svg>
      </core-icon>
    );
  }
}

CoreIcon.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  icon: React.PropTypes.object.isRequired
};

CoreIcon.defaultProps = {
  name: 'undefined',
  className: 'core-icon category-icon'
};


export default CoreIcon;
