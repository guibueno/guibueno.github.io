/**
 * Created by daniel on 5/8/16.
 */
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import CoreIcon from './CoreIcon';

class Category extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string.isRequired,
    theme: PropTypes.string,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    name: 'Undefined',
    theme: 'green-theme',
    title: 'Undefined'
  };

  constructor(props) {
    super(props);
    this.name = props.name;
    this.title = props.title;
    this.theme = props.theme;
    this.icon = props.icon;
    this.link = props.link;
  }

  render() {
    const playArrow = (
      <svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" className="fit"><g><path d="M8 5v14l11-7z"></path></g></svg>
    );

    const styles = {
      tile: {
        position: 'absolute'
      },
      img: {
        pointerEvents: 'none',
        display: 'block',
        height: 'auto',
        maxWidth: '65%',
        maxHeight: '100%',
        border: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };

    return (

      <div className={'category-item '+this.theme+' layout vertical'}>

        <div className="tile theme-bg-a dummy fit hero-id" style={styles.tile}></div>
        <div className="tile flex auto layout vertical">
          <div className="flex auto relative">
            <Link to={this.link}>
              <div className="fit layout vertical center center-justified">
                <img src={this.icon} name={this.name} className="core-icon" style={styles.img}/>
              </div>
            </Link>
          </div>

          <div className="cat-name theme-bg horizontal center layout hero-id">
            <div className="flex">
              <span>{ this.title }</span>
            </div>
            <Link to={this.link}>
              <CoreIcon name="arrow-forward" className="category-icon theme-bg" icon={playArrow} />
            </Link>
          </div>

        </div>

      </div>

    );
  }
}

export default Category;

